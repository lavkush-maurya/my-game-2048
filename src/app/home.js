"use client";

import Navbar from "@/components/Navbar";
import { Flex, Text } from "@chakra-ui/react";

function HomeClientComponent() {
  return (
    <>
      <Navbar />
      <Flex padding={"10%"}>
        <Text textAlign={"-webkit-center"}>
          Welcome to our website, the home of the addictive and exciting game -
          2048! Prepare yourself for an engaging puzzle experience that will
          challenge your strategic thinking and number manipulation skills. In
          2048, your goal is simple yet challenging: combine tiles of the same
          number to create higher values and ultimately reach the elusive 2048
          tile. With its minimalist design and intuitive gameplay, our 2048 game
          offers endless hours of fun and mental stimulation. Whether you're a
          seasoned player or new to the game, get ready to embark on a thrilling
          journey of numbers and strategy. Are you up for the challenge? Let's
          dive in and start sliding those tiles to conquer the 2048 game!
        </Text>
      </Flex>
    </>
  );
}
export default HomeClientComponent;
