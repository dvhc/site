import React from "react"
import { Heading, Flex, Text } from "rebass"
import ImageContainer from "../components/ImageContainer"

const Index = (props) => {
    return (
        <Flex flexDirection="column" px={["30px", "20vw"]}>
            <Heading mx="auto" mt="30px" fontSize={[5, 6, 7]}><Text as="span" color="primary">DV</Text>HackClub</Heading>
            <Text mx="auto" as="strong">What will you make?</Text>
            <Flex flexDirection={["column", "row", "row"]}>
                <Flex flexDirection="column" flex="1">
                    <Heading>Why HackClub?</Heading>
                    <Text>Andouille picanha alcatra pancetta beef fatback chuck. Jerky brisket turkey salami porchetta, jowl leberkas short loin chicken. Ribeye buffalo landjaeger pork venison pork chop. Buffalo leberkas frankfurter picanha swine tri-tip prosciutto ham hock rump bresaola flank meatball. Ham hock tri-tip brisket rump. Short loin prosciutto sirloin alcatra. Flank bresaola spare ribs shank biltong landjaeger pork loin capicola hamburger short ribs ham burgdoggen.</Text>
                </Flex>
                <Flex flexDirection="column" flex="1" flexGrow="1">
                    <ImageContainer sx={{
                        height: ["200px", "100%", "100%"],
                        m: "20px"
                    }} src="https://cdn.glitch.com/9f68e7eb-cbc8-4d6e-b977-6d54e27ebcf6%2F25.jpg?v=1565835464993" text="Windy City Hacks" />
                </Flex>
            </Flex>
            <Flex flexDirection={["column", "row-reverse", "row-reverse"]}>
                <Flex flexDirection="column" flex="1">
                    <Heading>What We Do</Heading>
                    <ul style={{
                        listStyleType: "none"
                    }}>
                        <li>✨ Learn something new</li>
                        <li>🏳️‍🌈 Inclusive AF</li>
                        <li>🦄 Present your projects</li>
                        <li>💻 Get debugging help</li>
                        <li>💖 Awesome community of learners and developers</li>
                        <li>🦕 You get dino Orpheus as a mascot</li>
                        <li>🖼️ STICKERS!!! (Yes, we will disinfect them and mail them to you)</li>
                    </ul>
                </Flex>
                <Flex flexDirection="column" flex="1" flexGrow="1">
                    <ImageContainer sx={{
                        height: ["200px", "100%", "100%"],
                        m: "20px"
                    }} src="https://raw.githubusercontent.com/hackclub/dinosaurs/master/party_orpheus.png" text="Master Orpheus" />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Index;