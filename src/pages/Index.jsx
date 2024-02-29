import React, { useState } from "react";
import { Box, Container, Flex, Heading, Input, Button, Text, VStack, useToast } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Image } from "@chakra-ui/react";

const Index = () => {
  const [time, setTime] = useState("");
  const toast = useToast();

  // Dummy earthquake prediction function
  // In a real-world scenario, you would replace this with an API call
  // to a service that provides earthquake predictions based on time.
  const predictEarthquake = () => {
    if (time.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a valid time.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate prediction result
    const prediction = `An earthquake is likely to occur around ${time}`;
    toast({
      title: "Prediction",
      description: prediction,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Flex direction="column" align="center" justify="center">
          <Heading mb={4}>Earthquake Prediction</Heading>
          <Text fontSize="lg">Enter a time to predict potential earthquake occurrences.</Text>
          <Image src="https://placehold.co/600x400" alt="Seismograph" py={5} />
        </Flex>
        <Box w="100%">
          <Input placeholder="Enter time (e.g., 14:30)" size="lg" value={time} onChange={(e) => setTime(e.target.value)} />
        </Box>
        <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg" onClick={predictEarthquake}>
          Predict
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
