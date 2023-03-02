import React from "react";
import { StyleSheet } from "react-native";
import ScoreListScreen from "./src/screens/ScoreListScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/store/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#fc861d" },
          headerTintColor: "black",
          sceneContainerStyle: {
            backgroundColor: "#fc861d",
          },
          drawerContentStyle: { backgroundColor: "#fc861d" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "black",
          drawerActiveBackgroundColor: "#b46017",
        }}
      >
        <Drawer.Screen name="Annonces" component={ScoreListScreen}/>
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#fc861d" style="dark" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#fc861d" },
                headerTintColor: "black",
              }}
            >
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="Historique" component={HistoryScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
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
