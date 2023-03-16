import React from "react";
import HistoryScreen from "../../screens/HistoryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";
import { PRIMARY } from "../../constant/Colors";

function StackNavigator() {
  const Stack = createNativeStackNavigator();

  /**
   *
   */
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: PRIMARY },
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
  );
}
export default StackNavigator;
