import React from "react"
import { Heading, Flex, Text } from "rebass"

const Error = (props) => {
    return (
        <Flex flexDirection="column" px={["30px", "20vw"]}>
            <Flex>
                <Heading className="error-text" mx="auto" mt="30px" fontSize={[5, 6, 7]}>404</Heading>
            </Flex>
            <Text mx="auto" width={["100%", "50%"]}>Oopsie, it seems like we can't find that... Contact us if you thing something should be here!</Text>
        </Flex>
    )
}

export default Error;