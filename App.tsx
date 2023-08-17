import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import UserSelect from "./screens/UserSelect/UserSelect";

// Definindo os tipos de tela
export type RootStackParamList = {
  Home: undefined;
  UserSelect: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="UserSelect" component={UserSelect} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
