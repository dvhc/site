import React from "react"
import { ThemeProvider } from "theme-ui"
import "../components/style.css"
import theme from "../components/theme"
import Footer from "../components/Footer"
import { Flex, Image } from "rebass"
import Nav from "../components/Nav"
import Head from "next/head"
import Banner from "@hackclub/banner"

export default ({ props, Component }) =>
    <ThemeProvider theme={theme}>
        <Head>
            <title>DVHackClub</title>
        </Head>
        <Banner year={2020} style={{ width: '256px' }} />
        <Flex className="rotate" sx={{
            display: ["none", "block", "block"],
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