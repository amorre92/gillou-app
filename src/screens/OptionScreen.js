import React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import InstrumentSwitchSelector from "../components/InstrumentSwitchSelector";
import { useSelector, useDispatch } from "react-redux";
import {
  switchAubadeMatinale,
  switchMitantDesCamps,
  switchShowNumber,
  updateOrder,
} from "../store/score";
import AnimatedCheckbox from "react-native-checkbox-reanimated";
import { PRIMARY } from "../constant/Colors";
import { ALL_SCORE_INITIAL_ORDER } from "../data/ScoreIdentifiers";
import Button from "../components/Button";

function OptionScreen({ navigation }) {
  const dispatch = useDispatch();
  const includeAubadeMatinale = useSelector(
    (state) => state.score.includeAubadeMatinale
  );
  const includeMitantDesCamps = useSelector(
    (state) => state.score.includeMitantDesCamps
  );
  const showScoreNumber = useSelector((state) => state.score.showNumber);

  const disableInitOrder =
    useSelector((state) => state.score.order) == ALL_SCORE_INITIAL_ORDER;

  const switchAubadeMatinaleHandler = () => {
    dispatch(switchAubadeMatinale());
  };
  const switchMitantDesCampsHandler = () => {
    dispatch(switchMitantDesCamps());
  };
  const switchShowScoreNumberHandler = () => {
    dispatch(switchShowNumber());
  };
  const reinitOrderHandler = () => {
    dispatch(updateOrder({ scoreOrder: ALL_SCORE_INITIAL_ORDER }));
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
        <View style={styles.line} />
        <View style={styles.row}>
          <Text style={styles.text}>Réinitialiser ordre</Text>
          <Button
            name={disableInitOrder ? "check-circle-outline" : "reload"}
            size={26}
            color="black"
            onPress={reinitOrderHandler}
            disabled={disableInitOrder}
          />
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
    width: 45,
    height: 30,
    alignItems: "center",
  },
  line: {
    borderTopColor: "black",
    borderTopWidth: 1,
    paddingBottom: 10,
  },
});
