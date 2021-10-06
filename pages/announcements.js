import React, { useState, useEffect } from "react"
import { Heading, Flex, Text, Button } from "rebass"
import fetch from "isomorphic-unfetch"
import mark from "marked"

const Announcements = props => {
    let [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        (async () => {
            let data = await fetch("https://dv.hackclub.com/api/announcements")
            let announcmentsJSON = await data.json()
            setAnnouncements(announcmentsJSON)
        })()
    }, [])
    return (
        <Flex flexDirection="column" px={["30px", "20vw"]}>
            <Heading mx="auto" mt="30px" fontSize={[3, 4, 5]}>Announcements 🎉!</Heading>
            <Text mx="auto">Want to tinker and know HTTP? GET <code>/api/announcements</code></Text>
            {announcements ? announcements.map(card =>
                <Flex sx={{
                    padding: "20px",
                    borderRadius: "10px",
                    width: "100%",
                    boxShadow: "md",
                    flexDirection: "column",
                    my: "10px"
                }}>
                    <Heading>{card.title}</Heading>
                    <Text dangerouslySetInnerHTML={{ __html: mark(card.mrkdwn) }}></Text>
                </Flex>
            ) : <Text>Loading...</Text>
            }

        </Flex>
    )
}


export default Announcements;