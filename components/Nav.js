import React from "react";
import { Flex, Text } from "rebass"
import { useColorMode } from "theme-ui"
import { Sun, Moon } from "react-feather"
import Link from "next/link"

let NavLink = ({ sx, ...props }) =>
    <Link href={props.href}>
        <Text sx={{
            fontWeight: "bold",
            color: "primary",
            ":hover": {
                color: "secondary",
                cursor: "pointer"
            },
            zIndex: 100000
        }} {...props}>
            {props.children}
        </Text>
    </Link>

const Header = props => {
    let [color, setColor] = useColorMode()

    return (
        <Flex width="100%" p="10px" px={["30px", "20vw"]}>
            <Flex pr="15px">
                <NavLink href="/">Home</NavLink>
            </Flex>
            <Flex mr="auto">
                <NavLink href="/announcements">Announcements</NavLink>
            </Flex>
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