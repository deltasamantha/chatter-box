/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {Box, NativeBaseProvider, Text} from "native-base";
import React from "react";
import { chatterboxTheme } from "./theme/theme";

const App = () => {
  return (
    <NativeBaseProvider theme={chatterboxTheme}>
      <Box flex="1" bg="chatterbox.500" alignItems="center" justifyContent="center">
        <Text>Helo world</Text>
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
