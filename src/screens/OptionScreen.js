import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import InstrumentSwitchSelector from "../components/InstrumentSwitchSelector";

function OptionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Text style={styles.text}>Tonalité</Text>
          <InstrumentSwitchSelector />
        </View>
      </ScrollView>
    </View>
  );
}

export default OptionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
});
