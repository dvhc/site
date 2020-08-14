import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../components/theme"
import Footer from "../components/Footer"
import { Flex } from "rebass"
import Nav from "../components/Nav"
import Head from "next/head"

export default ({ props, Component }) =>
    <ThemeProvider theme={theme}>
        <Head>
            <title>DVHackClub</title>
        </Head>
        <Flex height="100%" flexDirection="column" minHeight="100vh">
            <Nav />
            <Component {...props} />
            <Footer />
        </Flex>
    </ThemeProvider>