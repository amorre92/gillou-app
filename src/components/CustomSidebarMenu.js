import React from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { GILLOU } from "../image";
import { PRIMARY } from "../constant/Colors";

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={GILLOU} style={styles.sideMenuProfileIcon} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    marginTop: 20,
  },
  sideMenuProfileIcon: {
    marginTop: 30,
    width: 150,
    height: 150,
    alignSelf: "center",
    resizeMode: "contain",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomSidebarMenu;
