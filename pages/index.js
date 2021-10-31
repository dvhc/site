import React, { useState, useEffect } from "react";
import { Heading, Flex, Text, Button, Link as A } from "rebass";
import ImageContainer from "../components/ImageContainer";
import fetch from "isomorphic-unfetch";

const Index = (props) => {

  return (
    <Flex flexDirection="column" px={["30px", "20vw"]}>
      <Heading mx="auto" mt="30px" fontSize={[5, 6, 7]}>
        <Text as="span" color="primary">
          DV
        </Text>
        HackClub
      </Heading>
      <Text mx="auto" as="strong">
        What will you make?
      </Text>
      <Text mx="auto" color="primary" fontWeight="bold">
        {props.people} people have signed up! <A href="#signup">Sign up now!</A>
      </Text>
      <Flex flexDirection={["column", "row", "row"]}>
        <Flex flexDirection="column" flex="1">
          <Heading>Why HackClub?</Heading>
          <Text>
            So what separates Hack Club from all the rest of the programming
            clubs at DV? Is it the inclusiveness? Is it the ebic people in the
            club? Yes, but the most important thing is that we teach you how to
            create by making. Instead of focusing on the boring principles, we
            get you started just like how real creators and CEOs reccomend, by
            making. We'll help you create websites for your friend, crazy AI
            projects, and more! On the way, we'll teach the basics of CS, from
            variables to classes! For advanced people, we provide a way to get
            help, make friends (not just for advanced people), and present cool
            projects you've been working on!
          </Text>
        </Flex>
        <Flex flexDirection="column" flex="1" flexGrow="1">
          <ImageContainer
            sx={{
              height: ["200px", "100%", "100%"],
              m: "20px",
            }}
            src="/static/cover.jpg"
            text="People having fun at DVHacks"
          />
        </Flex>
      </Flex>
      <Flex flexDirection={["column", "row-reverse", "row-reverse"]}>
        <Flex flexDirection="column" flex="1">
          <Heading mx="auto">What We Do</Heading>
          <ul
            style={{
              listStyleType: "none",
            }}
          >
            <li>✨ Learn something new</li>
            <li>🏳️‍🌈 Inclusive AF</li>
            <li>🦄 Present your projects</li>
            <li>💻 Get debugging help</li>
            <li>💖 Awesome community of learners and developers</li>
            <li>🦕 You get dino Orpheus as a mascot</li>
            <li>
              🖼️ STICKERS!!! (Yes, we will disinfect them and mail them to you)
            </li>
          </ul>
        </Flex>
        <Flex flexDirection="column" flex="1" flexGrow="1">
          <ImageContainer
            sx={{
              height: ["200px", "100%", "100%"],
              m: "20px",
            }}
            src="https://raw.githubusercontent.com/hackclub/dinosaurs/master/party_orpheus.png"
            text="Master Orpheus"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" my="20px" id="signup">
        <Button
          sx={{
            ":hover": {
              bg: "secondary",
              cursor: "pointer",
            },
          }}
          mx="auto"
          as="a"
          target="_blank"
          href="https://airtable.com/shrR0bmKueGVNzz16"
        >
          Sign Up now!
        </Button>
      </Flex>
    </Flex>
  );
};

export async function getStaticProps(context) {
  let data = await fetch("https://dv.hackclub.com/api/count");
  let count = await data.json();
  return {
    props: count
  }
}

export default Index;
