import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import {
  Drawer,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
} from "../src"

describe("<Drawer />", () => {
  const DrawerOpenExample = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Button data-testid="OpenDrawer" onClick={onOpen}>
          Open Drawer
        </Button>

        <Drawer data-testid="Drawer" isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay
            data-testid="DrawerOverlay"
            bg="blackAlpha.300"
            backdropFilter="blur(10px)"
          />
          <DrawerCloseButton data-testid="DrawerCloseButton" color="red.500" />
          <DrawerHeader data-testid="DrawerHeader">header</DrawerHeader>
          <DrawerBody data-testid="DrawerBody">body</DrawerBody>
          <DrawerFooter data-testid="DrawerFooter">footer</DrawerFooter>
        </Drawer>
      </>
    )
  }

  test("Drawer renders correctly", async () => {
    const { container } = render(<DrawerOpenExample />)
    await a11y(container)
  })

  test("Drawer renders correctly when open", async () => {
    render(<DrawerOpenExample />)

    fireEvent.click(screen.getByTestId("OpenDrawer"))

    expect(screen.getByTestId("Drawer")).toBeInTheDocument()
    expect(screen.getByTestId("DrawerHeader")).toHaveTextContent("header")
    expect(screen.getByTestId("DrawerBody")).toHaveTextContent("body")
    expect(screen.getByTestId("DrawerFooter")).toHaveTextContent("footer")
  })
})
