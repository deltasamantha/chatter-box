import React from "react";
import {Box, Text, VStack} from "native-base";

const Home: React.FC = () => {
  return (
    <Box
      flex={1}
      safeArea
      alignItems="center"
      justifyContent="center"
      bg="chatterbox.500">
      <VStack alignItems="center" space={5} maxW="320px">
        <Text fontSize="lg">Home</Text>
      </VStack>
    </Box>
  );
};

export default Home;
