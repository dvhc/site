import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../components/theme"
import Footer from "../components/Footer"
import { Flex } from "rebass"

export default ({ props, Component }) =>
    <ThemeProvider theme={theme}>
        <Flex height="100%" flexDirection="column">
            <Component {...props} />
            <Footer />
        </Flex>
    </ThemeProvider>