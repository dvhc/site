import React from "react";
import { Flex, Text } from "rebass"
import { useColorMode } from "theme-ui"
import { Sun, Moon } from "react-feather"

const Header = props => {
    let [color, setColor] = useColorMode()

    return (
        <Flex width="100%" p="10px">
            <Flex ml="auto" sx={{
                borderRadius: "100px",
                border: "solid 3px #00000000",
                p: "5px",
                transition: "all 0.5s ease",
                ":hover": {
                    borderColor: "secondary",
                    cursor: "pointer"
                }
            }} onClick={() => setColor(color == "dark" ? "default" : "dark")}>
                {color == "dark" ? <Moon size={28} /> : <Sun size={28} />}
            </Flex>
        </Flex>
    )
}

export default Header;