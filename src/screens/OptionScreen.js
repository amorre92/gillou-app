import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  CheckBox,
  Pressable,
} from "react-native";
import InstrumentSwitchSelector from "../components/InstrumentSwitchSelector";
import { useSelector, useDispatch } from "react-redux";
import { switchAubadeMatinale, switchMitantDesCamps } from "../store/score";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import { PRIMARY } from "../constant/Colors";

function OptionScreen({ navigation }) {
  const dispatch = useDispatch();
  const includeAubadeMatinale = useSelector(
    (state) => state.score.includeAubadeMatinale
  );
  const includeMitantDesCamps = useSelector(
    (state) => state.score.includeMitantDesCamps
  );
  const switchAubadeMatinaleHandler = () => {
    dispatch(switchAubadeMatinale());
  };
  const switchMitantDesCampsHandler = () => {
    dispatch(switchMitantDesCamps());
  };
  // see https://github.com/craftzdog/react-native-checkbox-reanimated

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Text style={styles.text}>Tonalité</Text>
          <InstrumentSwitchSelector />
        </View>
        <View
          style={styles.line}
        />
        <View style={styles.row}>
          <Text style={styles.text}>Inclure Aubade matinale</Text>
          <Pressable
            onPress={switchAubadeMatinaleHandler}
            style={styles.checkbox}
          >
            <AnimatedCheckbox
              checked={includeAubadeMatinale}
              highlightColor={PRIMARY}
              checkmarkColor={PRIMARY}
              boxOutlineColor="black"
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Inclure Mitant des camps</Text>
          <Pressable
            onPress={switchMitantDesCampsHandler}
            style={styles.checkbox}
          >
            <AnimatedCheckbox
              checked={includeMitantDesCamps}
              highlightColor={PRIMARY}
              checkmarkColor={PRIMARY}
              boxOutlineColor="black"
            />
          </Pressable>
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
    paddingBottom: 10,
  },
  text: {
    fontSize: 15,
  },
  checkbox: {
    width: 30,
    height: 30,
  },
  line: {
    borderTopColor: "black",
    borderTopWidth: 1,
    paddingBottom: 10
  }
});
