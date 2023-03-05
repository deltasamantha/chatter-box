/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from "native-base";
import React from "react";
import Navigator from "./navigators/Navigator";
import {chatterboxTheme} from "./theme/theme";

const App = () => {
  return (
    <NativeBaseProvider theme={chatterboxTheme}>
      <Navigator />
    </NativeBaseProvider>
  );
};

export default App;
