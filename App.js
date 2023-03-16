import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/store/store";
import { PRIMARY } from "./src/constant/Colors";
import StackNavigator from "./src/components/navigation/StackNavigator";

export default function App() {
 
  return (
    <>
      <StatusBar backgroundColor={PRIMARY} style="dark" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StackNavigator/>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}
