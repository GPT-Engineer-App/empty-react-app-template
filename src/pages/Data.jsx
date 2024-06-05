import React from 'react';
import { Box, Button, Container, Flex, Heading, IconButton, Input, Select, Table, Tbody, Td, Th, Thead, Tr, VStack, HStack, Spacer, Text, Icon } from '@chakra-ui/react';
import { FaBell, FaQuestionCircle, FaUserCircle, FaFilter, FaSort, FaFileImport, FaFileExport, FaPen, FaTrash } from 'react-icons/fa';

const Data = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Data Table
        </Heading>
        <HStack spacing={4}>
          <IconButton icon={<FaQuestionCircle />} aria-label="Help" />
          <IconButton icon={<FaBell />} aria-label="Notifications" />
          <IconButton icon={<FaUserCircle />} aria-label="User Profile" />
        </HStack>
      </Flex>
      <Flex mt={4}>
        <Box as="aside" w="20%" p={4} bg="gray.100">
          <Heading as="h2" size="md">Project Name</Heading>
          <Text>Category</Text>
          <VStack align="start" mt={4}>
            <Button variant="link">Call Tool</Button>
            <Button variant="link">Invoice Tool</Button>
          </VStack>
        </Box>
        <Box as="main" flex="1" p={4}>
          <HStack mb={4} spacing={4}>
            <Input placeholder="Search" />
            <Select placeholder="Category">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
            <IconButton icon={<FaFilter />} aria-label="Filter" />
            <IconButton icon={<FaSort />} aria-label="Sort" />
            <Spacer />
            <Button leftIcon={<FaFileImport />}>Import</Button>
            <Button leftIcon={<FaFileExport />}>Export</Button>
            <Button colorScheme="blue">+ Add report</Button>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th><Input type="checkbox" /></Th>
                <Th>Item</Th>
                <Th>Value ($)</Th>
                <Th>Data</Th>
                <Th>Date</Th>
                <Th>Status</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <Tr key={index}>
                  <Td><Input type="checkbox" /></Td>
                  <Td>Lorem dolore</Td>
                  <Td>9,000</Td>
                  <Td>Data series</Td>
                  <Td>DD/MM/YY</Td>
                  <Td><Button size="sm">Status</Button></Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton icon={<FaPen />} aria-label="Edit" size="sm" />
                      <IconButton icon={<FaTrash />} aria-label="Delete" size="sm" />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Text>106 results</Text>
            <HStack spacing={2}>
              <Button size="sm">1</Button>
              <Button size="sm">2</Button>
              <Button size="sm">3</Button>
              <Button size="sm">4</Button>
              <Button size="sm">...</Button>
              <Button size="sm">10</Button>
              <Button size="sm">11</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Data;