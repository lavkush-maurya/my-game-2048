"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

function HomeClientComponent() {
  return (
    <Flex>
      <Text>This is Home Page</Text>
      <Button colorScheme="orange" variant="outline">
        <Link href="/about">About</Link>
      </Button>
    </Flex>
  );
}
export default HomeClientComponent;
