import React from "react";
import {Box, Button, Input, Link, Text, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {AuthStackNavigationProps} from "../../navigators/AuthNavigator";

const SignIn: React.FC = () => {
  const {navigate} = useNavigation<AuthStackNavigationProps>();

  const onPressSignIn = () => {
    console.log("Sign in");
  };

  const onPressSignUp = () => {
    navigate("SignUp");
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
          {"Sign in"}
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
        <Button
          width="56"
          rounded="full"
          variant="solid"
          onPress={onPressSignIn}
          bgColor="chatterboxAccent.400"
          _text={{fontWeight: "bold"}}>
          Sign In
        </Button>
        <Button
          width="56"
          rounded="full"
          variant="outline"
          onPress={onPressSignUp}
          backgroundColor="chatterbox.500"
          borderColor="chatterbox.100"
          _text={{fontWeight: "bold", color: "chatterbox.100"}}>
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default SignIn;
