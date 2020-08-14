import React from "react"
import { ThemeProvider } from "theme-ui"
import "../components/style.css"
import theme from "../components/theme"
import Footer from "../components/Footer"
import { Flex, Image } from "rebass"
import Nav from "../components/Nav"
import Head from "next/head"

export default ({ props, Component }) =>
    <ThemeProvider theme={theme}>
        <Head>
            <title>DVHackClub</title>
        </Head>
        <Flex className="rotate" sx={{
            display: ["none !important", "none !important", "flex !important"],
            position: "absolute",
            width: "256px",
            top: "-10px",
            left: "10px",
        }} as="a" href="https://hackclub.com">
            <Image sx={{ height: "100%" }} src="https://assets.hackclub.com/flag-orpheus-top.svg" />
        </Flex>
        <Flex height="100%" flexDirection="column" minHeight="100vh">
            <Nav />
            <Component {...props} />
            <Footer />
        </Flex>
    </ThemeProvider>