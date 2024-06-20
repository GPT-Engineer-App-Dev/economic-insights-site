import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        {/* Main Content */}
        <Box flex="3">
          <VStack align="stretch" spacing={4}>
            <Heading as="h1" size="xl">Top Headlines</Heading>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="md">Headline 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="md">Headline 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="md">Headline 3</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg" mb={4}>Sidebar</Heading>
          <Text>Additional content or advertisements can go here.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;