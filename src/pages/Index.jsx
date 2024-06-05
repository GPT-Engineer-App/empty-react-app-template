import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          MyApp
        </Heading>
        <Box>
          <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px", color: "white" }}>About</Link>
        </Box>
      </Flex>
      <Box as="main" mt={4}>
        <VStack spacing={4}>
          <Heading as="h2" size="xl">Welcome to MyApp</Heading>
          <Text fontSize="lg">This is a placeholder for future content.</Text>
        </VStack>
      </Box>
      <Footer />
    </Container>
  );
};

export default Index;