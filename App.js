import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen_01 from "./screens/Screen_01";
import Screen_00 from "./screens/Screen_00";
import Screen_login from "./screens/Screen_login";
import Screen_profile from "./screens/Screen_profile";
import Toast from "react-native-toast-message";
// import Scr
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen_login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Screen_00" component={Screen_00} />
        <Stack.Screen name="Screen_01" component={Screen_01} />
        <Stack.Screen name="Screen_login" component={Screen_login} />
        <Stack.Screen name="Screen_profile" component={Screen_profile} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
