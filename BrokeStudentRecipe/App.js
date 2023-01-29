import { StyleSheet, Text, View } from "react-native";
import { React, useCallback, useEffect } from "react";
import Login from "./views/Login.js";
import Register from "./views/Register.js";
import Home from "./views/Home.js";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
//probably won't be needed in here
// import IngSearchBar from './SearchBar/IngSearchBar'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Login></Login> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{}}
        ></Stack.Screen>
        <Stack.Screen name="Home" component={Home} options={{}}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        {/* <View style={styles.container}> */}
        {/* <Text>App</Text> */}

        {/* </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
