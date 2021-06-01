import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"


const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    lg: "62em",
})
const overrides = {
    breakpoints,
    config,
    styles: {
        global: {
          // styles for the `body`
          body: {
              margin: "0",
              padding: "0",
          },
          // styles for the `a`
          a: {
            color: "teal.500",
            _hover: {
              textDecoration: "underline",
            },
          },
          zIndices: {
            hide: -1,
            auto: "auto",
            base: 0,
            docked: 10,
            dropdown: 1000,
            sticky: 1100,
            banner: 1200,
            overlay: 1300,
            modal: 1400,
            popover: 1500,
            skipLink: 1600,
            toast: 1700,
            tooltip: 1800,
          },
        },
      },
}
const theme = extendTheme(overrides)
export default theme