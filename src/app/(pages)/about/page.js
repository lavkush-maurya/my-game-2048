"use client";
import Navbar from "@/components/Navbar";
import { Button, Container, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <Text textAlign={"center"} margin={"8"}>
        About Us
      </Text>
      <Flex padding={"0% 10%"} textAlign={"justify"}>
        <Text>
          Introducing 2048 - the ultimate easy and fun puzzle game! Whether
          you're a numbers enthusiast or not, this game is designed to captivate
          and entertain you. Get ready to embark on an addictive journey of
          sliding tiles and merging numbers on a 4x4 grid. Using the arrow keys
          or the W, A, S, D keys alternatively, you'll have full control over
          the game. Every time you press a key, all tiles smoothly slide in the
          specified direction. Keep an eye out for tiles with the same value, as
          they will merge into a new tile. Your goal? Reach the elusive 2048
          tile! While there may be optimal strategies to maximize your score,
          there's always an element of chance that adds excitement and
          unpredictability to the game. And here's a challenge for the skilled
          players: if you manage to beat the game, why not aim for a smaller
          score? That means finishing with fewer moves, truly showcasing your
          mastery of the game. Join the millions of players worldwide who have
          fallen in love with 2048. Experience the joy of strategic thinking,
          quick decision-making, and a dash of luck. Are you ready to take on
          the challenge and unlock the magic of 2048? Start playing now and see
          how far you can slide and merge your way to victory!
        </Text>
      </Flex>
      <Container textAlign={"center"} mt={"10"}>
        <Text color="orange.600"> See My Other Projects </Text>
        <Button colorScheme="orange" variant={"outline"}>
          <a
            href="https://lavkushgatsby.netlify.app/projects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </Button>
      </Container>
    </div>
  );
};

export default About;
