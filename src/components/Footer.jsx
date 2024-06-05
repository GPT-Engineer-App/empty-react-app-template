import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="blue.500" color="white" py={4} mt={8} textAlign="center">
      <Text fontSize="sm">© 2023 MyApp. All rights reserved.</Text>
      <Text fontSize="sm">Placeholder text for footer content.</Text>
    </Box>
  );
};

export default Footer;