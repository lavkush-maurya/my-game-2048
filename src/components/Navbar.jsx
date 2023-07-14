"use client";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box bg="lightsalmon" p={4} display="flex" justifyContent="space-evenly">
      <Link href={"/game"}>Game</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
    </Box>
  );
};

export default Navbar;
