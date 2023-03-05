import React from "react";
import {Box, Button, Input, Text, VStack} from "native-base";

const SignUp: React.FC = () => {
  const onPress = () => {
    console.log("Button pressed");
  };

  const onPressSignUp = () => {
    console.log("Sign up");
  };

  return (
    <Box
      flex={1}
      safeArea
      alignItems="center"
      justifyContent="center"
      bg="chatterbox.500">
      <VStack alignItems="center" space={5} maxW="320px">
        <Text fontSize="lg" fontWeight="bold" color="chatterbox.100">
          {"Sign up"}
        </Text>
        <Input
          size="xl"
          placeholder="email"
          variant="rounded"
          autoCapitalize="none"
          autoCorrect={false}
          backgroundColor="chatterbox.100"
          color="chatterbox.800"
          placeholderTextColor="chatterbox.400"
          borderColor="chatterbox.500"
        />
        <Input
          size="xl"
          type="password"
          placeholder="password"
          variant="rounded"
          autoCapitalize="none"
          autoCorrect={false}
          backgroundColor="chatterbox.100"
          color="chatterbox.800"
          placeholderTextColor="chatterbox.400"
          borderColor="chatterbox.500"
        />
        <Input
          size="xl"
          type="password"
          placeholder="re-enter password"
          variant="rounded"
          autoCapitalize="none"
          autoCorrect={false}
          backgroundColor="chatterbox.100"
          color="chatterbox.800"
          placeholderTextColor="chatterbox.400"
          borderColor="chatterbox.500"
        />
        <Button
          width="56"
          rounded="full"
          variant="solid"
          onPress={onPressSignUp}
          bgColor="chatterboxAccent.400"
          _text={{fontWeight: "bold"}}>
          Sign In
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUp;
