import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomSidebarMenu from "../CustomSidebarMenu";
import ScoreListScreen from "../../screens/ScoreListScreen";
import OptionScreen from "../../screens/OptionScreen";
import { PRIMARY, SECONDARY } from "../../constant/Colors";
import OrderScoreListScreen from "../../screens/OrderScoreListScreen";

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: PRIMARY },
        headerTintColor: "black",
        sceneContainerStyle: {
          backgroundColor: PRIMARY,
        },
        drawerContentStyle: { backgroundColor: PRIMARY },
        drawerInactiveTintColor: "black",
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: SECONDARY,
      }}
    >
      <Drawer.Screen
        name="Annonces"
        component={ScoreListScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name={focused ? "book-music" : "book-music-outline"}
              size={size}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Ordre des annonces"
        component={OrderScoreListScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name={focused ? "order-bool-ascending" : "order-bool-descending"}
              size={size}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Options"
        component={OptionScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name={focused ? "cog" : "cog-outline"}
              size={size}
              color="black"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
