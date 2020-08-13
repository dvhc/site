import React from "react"
import { Flex, Text } from "rebass"

const ImageContainer = ({ sx, src, text, ...props }) => {
    return (
        <Flex sx={{
            borderRadius: "10px",
            boxShadow: "md",
            flexDirection: "column",
            overflow: "hidden",
            backgroundImage: `url(${src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            ...sx
        }}>
            <Text mt="auto" bg="#37323270" color="white" textAlign="center">{text}</Text>
        </Flex >
    )
}

export default ImageContainer;