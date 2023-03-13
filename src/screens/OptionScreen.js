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
import {
  changeOrder,
  switchAubadeMatinale,
  switchMitantDesCamps,
  switchShowNumber,
} from "../store/score";
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
  const showScoreNumber = useSelector((state) => state.score.showNumber);
  const switchAubadeMatinaleHandler = () => {
    dispatch(switchAubadeMatinale());
  };
  const switchMitantDesCampsHandler = () => {
    dispatch(switchMitantDesCamps());
  };
  const switchShowScoreNumberHandler = () => {
    dispatch(switchShowNumber());
  };
  const changeOrderHandler = () => {
    dispatch(changeOrder());
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Text style={styles.text}>Tonalité</Text>
          <InstrumentSwitchSelector />
        </View>
        <View style={styles.line} />
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
        <View style={styles.row}>
          <Text style={styles.text}>Montrer le numéro des airs</Text>
          <Pressable
            onPress={switchShowScoreNumberHandler}
            style={styles.checkbox}
          >
            <AnimatedCheckbox
              checked={showScoreNumber}
              highlightColor={PRIMARY}
              checkmarkColor={PRIMARY}
              boxOutlineColor="black"
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Change order</Text>
          <Pressable
            onPress={changeOrderHandler}
            style={styles.checkbox}
          >
            <Text>PUSH HERE</Text>
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
    fontSize: 16,
  },
  checkbox: {
    width: 30,
    height: 30,
  },
  line: {
    borderTopColor: "black",
    borderTopWidth: 1,
    paddingBottom: 10,
  },
});
