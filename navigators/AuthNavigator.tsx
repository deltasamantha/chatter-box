import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn/SignIn";
import SignUp from "../screens/SignUp/SignUp";
import {StackNavHeader} from "../components/NavHeader/NavHeader";

type AuthParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthStackNavigationProps = NativeStackNavigationProp<AuthParamList>;

const AuthNavigator: React.FC = () => {
  const AuthStack = createNativeStackNavigator<AuthParamList>();
  return (
    <AuthStack.Navigator
      screenOptions={{headerBackTitleVisible: false, headerTintColor: "red"}}>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          header: props => <StackNavHeader {...props} />,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
