import { readFile, readdir, writeFile } from "fs/promises"
import path from "path"
import type { GrayMatterFile } from "gray-matter"
import matter from "gray-matter"
import { CONSTANT } from "constant"
import { prettier } from "libs/prettier"
import { toKebabCase } from "utils/assertion"

type Input = string | Buffer
type Data = GrayMatterFile<Input>["data"]
type Content = GrayMatterFile<Input>["content"]
type Locale = (typeof LOCALES)[number]
type Options = {
  isMulti: boolean
  componentName: string
  baseComponentName: string | undefined
  baseComponentPath: string | undefined
}

const THEME_DIR_PATH = path.join(".theme", "components")
const COMPONENT_DIR_PATH = path.join("contents", "components")
const LOCALES = CONSTANT.I18N.LOCALES.map(({ value }) => value)
const LOCALE_TAB_MAP = {
  en: "Theming",
  ja: "テーマ",
}
const LOCALE_DESC_MAP = {
  en: ({
    isMulti,
    componentName,
    baseComponentName,
    baseComponentPath,
  }: Options) => {
    let content = [
      "## Theming",
      `The \`${componentName}\` is a [${
        isMulti ? "multi" : "single"
      } part component](/styled-system/theming/component-style#${
        isMulti ? "multi" : "single"
      }-part-component).`,
    ]

    if (baseComponentName) {
      content = [
        ...content,
        `\n:::note`,
        `\`${componentName}\` inherits the style from [${baseComponentName}](${baseComponentPath}).`,
        `:::\n`,
      ]
    }

    content = [
      ...content,
      `\n:::note`,
      `If you want to change the style of the component, please check [here](/styled-system/theming/customize-theme#changing-the-style-of-components).`,
      `:::\n`,
    ]

    return content.join("\n")
  },
  ja: ({
    isMulti,
    componentName,
    baseComponentName,
    baseComponentPath,
  }: Options) => {
    let content = [
      "## テーマ",
      `\`${componentName}\`は、[${
        isMulti ? "複数" : "単一"
      }パーツのコンポーネント](/styled-system/theming/component-style#${
        isMulti ? "複数" : "単一"
      }パーツのコンポーネント)です。`,
    ]

    if (baseComponentName) {
      content = [
        ...content,
        `\n:::note`,
        `\`${componentName}\`は、[${baseComponentName}](${baseComponentPath})のスタイルを継承しています。`,
        `:::\n`,
      ]
    }

    content = [
      ...content,
      `\n:::note`,
      `コンポーネントのスタイルを変更したい場合は、[こちら](/styled-system/theming/customize-theme#コンポーネントのスタイルを変更する)をご覧ください。`,
      `:::\n`,
    ]

    return content.join("\n")
  },
}

const getThemes = async () => {
  const fileNames = await readdir(THEME_DIR_PATH)

  const themeMap = await Promise.all(
    fileNames.map(async (fileName) => {
      const content = await readFile(
        path.join(THEME_DIR_PATH, fileName),
        "utf8",
      )

      const name = fileName.replace(".ts", "")

      return { name, content }
    }),
  )

  const themes = themeMap.reduce<Record<string, string>>(
    (prev, { name, content }) => {
      if (name !== "index") {
        prev[name] = content
      }

      return prev
    },
    {},
  )

  return themes
}

const getDirs = async (path: string) => {
  let dirents = await readdir(path, { withFileTypes: true })

  dirents = dirents.filter((dirent) => dirent.isDirectory())

  return dirents
}

const getPaths = async () => {
  const categoryDirs = await getDirs(COMPONENT_DIR_PATH)
  const componentDirs = await Promise.all(
    categoryDirs.map(
      async ({ name, path }) => await getDirs(`${path}/${name}`),
    ),
  )

  const paths = componentDirs
    .flat()
    .reduce<Record<string, string>>((prev, { name, path }) => {
      prev[name] = `${path}/${name}`

      return prev
    }, {})

  return paths
}

const getMdxFile = async (path: string) => {
  const file = await readFile(path, "utf8")

  return matter(file)
}

const generateData = async (path: string, overrideData?: Data) => {
  let { data } = await getMdxFile(path)

  delete data.is_tabs

  data = { ...data, ...overrideData }

  return data
}

const getIsMulti = (content: string) => {
  const reg = /import(\s+type)?\s+{\s*(ComponentMultiStyle)\s*}\s+from/g

  return !![...content.matchAll(reg)].length
}

const getBaseName = (content: string) => {
  const regex = /mergeStyle\(\s*([^,]+)/

  return content.match(regex)?.[1].trim()
}

const generateContent = async ({
  data,
  content,
  locale,
  paths,
}: {
  data: Data
  content: string
  locale: Locale
  paths: Record<string, string>
}) => {
  const componentName = data.title
  const isMulti = getIsMulti(content)
  const baseComponentName = getBaseName(content)
  let baseComponentPath = paths[toKebabCase(baseComponentName ?? "")]

  if (baseComponentPath) {
    baseComponentPath = "/" + baseComponentPath.replace(/^contents\//, "")
  }

  content = content.replace(
    /import(\s+type)?\s+{[^}]*}\s+from\s+['"][^'"]+['"]\s*/g,
    "",
  )

  content = "```ts\n" + content + "\n```"

  content =
    LOCALE_DESC_MAP[locale]({
      isMulti,
      componentName,
      baseComponentName,
      baseComponentPath,
    }) + content

  return content
}

const getMdxFileName = (fileName: string, locale: Locale) => {
  if (locale !== CONSTANT.I18N.DEFAULT_LOCALE) fileName += `.${locale}`

  return fileName + ".mdx"
}

const writeMdxFile = async (path: string, data: Data, content: Content) => {
  let file = matter.stringify(content, data)

  file = await prettier(file)

  await writeFile(path, file)
}

const generateMdxFiles = (
  themes: Record<string, string>,
  paths: Record<string, string>,
) =>
  Promise.all(
    Object.entries(themes).map(async ([name, content]) => {
      const dirPath = paths[name]

      if (!dirPath) return

      await Promise.all(
        LOCALES.map(async (locale) => {
          const data = await generateData(
            path.join(dirPath, getMdxFileName("index", locale)),
            { tab: LOCALE_TAB_MAP[locale] },
          )
          const resolvedContent = await generateContent({
            data,
            content,
            locale,
            paths,
          })

          const outPath = path.join(dirPath, getMdxFileName("theming", locale))

          await writeMdxFile(outPath, data, resolvedContent)

          console.log(`[theming]: Generated ${outPath}`)
        }),
      )
    }),
  )

const main = async () => {
  const themes = await getThemes()
  const paths = await getPaths()

  await generateMdxFiles(themes, paths)
}

main()
