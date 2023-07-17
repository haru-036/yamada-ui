import {
  toHex,
  parseToRgba,
  transparentize,
  mix,
  darken,
  lighten,
} from 'color2k'
import { getMemoizedObject as get, Dict, isArray } from '.'

export const getColor =
  (color: string, fallback?: string) =>
  (theme: Dict, colorMode: 'light' | 'dark' | undefined) => {
    const hex:
      | string
      | number
      | [string | number, string | number]
      | undefined = get(theme, `colors.${color}`, color)

    try {
      if (isArray(hex)) {
        const [lightHex, darkHex] = hex

        return toHex(String(colorMode !== 'dark' ? lightHex : darkHex))
      } else {
        return toHex(String(hex))
      }
    } catch {
      return fallback ?? '#000000'
    }
  }

export const lightenColor =
  (color: string, amount: number) =>
  (theme: Dict, colorMode: 'light' | 'dark' | undefined) => {
    const raw = getColor(color)(theme, colorMode)

    return toHex(lighten(raw, amount / 100))
  }

export const darkenColor =
  (color: string, amount: number) =>
  (theme: Dict, colorMode: 'light' | 'dark' | undefined) => {
    const raw = getColor(color)(theme, colorMode)

    return toHex(darken(raw, amount / 100))
  }

export const tintColor =
  (color: string, amount: number) =>
  (theme: Dict, colorMode: 'light' | 'dark' | undefined) => {
    const raw = getColor(color)(theme, colorMode)

    return toHex(mix(raw, '#fff', amount))
  }

export const shadeColor =
  (color: string, amount: number) =>
  (theme: Dict, colorMode: 'light' | 'dark' | undefined) => {
    const raw = getColor(color)(theme, colorMode)

    return toHex(mix(raw, '#000', amount / 100))
  }

export const transparentizeColor =
  (color: string, alpha: number) =>
  (theme: Dict, colorMode: 'light' | 'dark' | undefined) => {
    const raw = getColor(color)(theme, colorMode)

    return transparentize(raw, 1 - alpha)
  }

export const toneColor =
  (color: string, l: number) =>
  (theme: Dict, colorMode: 'light' | 'dark' | undefined) => {
    const raw = getColor(color)(theme, colorMode)

    if (l < 0 || 900 < l) return color

    let n = (l - 500) / 10

    const isLighten = n <= 0

    if (isLighten) n *= -1

    if (n !== 0) n = n - 5 * (isLighten ? 1 : -1)

    return toHex(isLighten ? lighten(raw, n / 100) : mix(raw, '#000', n / 100))
  }

export const randomColor = ({
  string,
  colors,
}: { string?: string; colors?: string[] } = {}) => {
  const fallback = randomHex()

  if (string && colors) return randomColorFromList(string, colors)

  if (string && !colors) return randomColorFromString(string)

  if (colors && !string) return randomFromList(colors)

  return fallback
}

const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`

const randomColorFromString = (str: string) => {
  let hash = 0

  if (str.length === 0) return hash.toString()

  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  let color = '#'

  for (let j = 0; j < 3; j += 1) {
    const value = (hash >> (j * 8)) & 255

    color += `00${value.toString(16)}`.substr(-2)
  }

  return color
}

const randomColorFromList = (str: string, list: string[]) => {
  let index = 0

  if (str.length === 0) return list[0]

  for (let i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index)

    index = index & index
  }

  index = ((index % list.length) + list.length) % list.length

  return list[index]
}

const randomFromList = (list: string[]) =>
  list[Math.floor(Math.random() * list.length)]

const getBrightness = (color: string) => {
  const [r, g, b] = parseToRgba(color)

  return (r * 299 + g * 587 + b * 114) / 1000
}

export const isTone =
  (color: string) => (theme: Dict, colorMode: 'light' | 'dark' | undefined) => {
    const raw = getColor(color)(theme, colorMode)

    const brightness = getBrightness(raw)

    const isDark = brightness < 128

    return isDark ? 'dark' : 'light'
  }

export const isLight =
  (color: string) => (theme: Dict, colorMode: 'light' | 'dark' | undefined) =>
    isTone(color)(theme, colorMode) === 'dark'

export const isDark =
  (color: string) => (theme: Dict, colorMode: 'light' | 'dark' | undefined) =>
    isTone(color)(theme, colorMode) === 'light'