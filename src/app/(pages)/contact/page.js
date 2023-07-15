"use client";
import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission logic here
    // You can make an API call or handle the data submission as per your requirement

    // Display a success toast message
    toast({
      title: "Form Submitted",
      description:
        "We have received your message. We will get back to you soon!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <Box maxW="500px" mx="auto" mt={10} p={4}>
        <Heading as="h1" mb={6}>
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4} isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input type="text" placeholder="Enter your name" />
          </FormControl>
          <FormControl id="email" mb={4} isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="message" mb={4} isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your message" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </form>
        <Box
          as="footer"
          mt={10}
          textAlign="center"
          fontSize="sm"
          color="gray.500"
        >
          © 2023 - Created with 🧡 -{" "}
          <a
            href="http://lavv-blog.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lavkush Maurya
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
