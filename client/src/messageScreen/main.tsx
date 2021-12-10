import * as React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

interface MessageScreenProps {
  Username: String;
}

const MessageScreen: React.FC<MessageScreenProps> = ({ Username }) => {
  return (
    <Center w="100vw" h="100vh">
      <Flex w="80vw" h="80vh" bgColor="red.200" id="main_continer">
        <Flex h="100%" w="20%" bgColor="green" p={20}></Flex>
        <Flex h="100%" w="80%" bgColor="blue"></Flex>
      </Flex>
    </Center>
  );
};

export default MessageScreen;
