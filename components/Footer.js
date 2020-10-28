import React from "react"
import { Flex, Text } from "rebass"
import Link from "./Link"
import { useColorMode } from 'theme-ui'
import theme from "./theme"

const Footer = props => {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <Flex mt="auto" height="150px" sx={{
            backgroundImage: `url(https://dvhc.now.sh/static/pattern.svg)`,
            flexDirection: "column"
        }}>
            <Text m="auto" mb="10px">Made with 💖 by the DVHackClub Team!</Text>
            <Link m="auto" href="mailto:neel.redkar@gmail.com" my="5px">Contact us!</Link>
            <Link m="auto" mt="10px" href="https://github.com/dvhc/site">View the Source Code</Link>
        </Flex >
    )
}

export default Footer;
