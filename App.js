import React from "react";
import { StyleSheet } from "react-native";
import ScoreListScreen from "./src/screens/ScoreListScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/store/store"

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar backgroundColor="#ebe8e4" style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#ebe8e4" },
              headerTintColor: "black",
            }}
          >
            <Stack.Screen name="Annonces" component={ScoreListScreen} />
            <Stack.Screen name="Historique" component={HistoryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: 15,
    paddingBottom: 50,
  },
});
