import * as React from "react"
import Main from "./screens/main";
import HomeScreen from "./screens/homeScreen";
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME" screenOptions={{ headerShown: false }} >

        <Stack.Screen
          name="HOME"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Main"
          component={Main}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

