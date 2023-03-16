import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import Score from "../components/Score";
import ScoreData from "../data/ScoreData";
import { useLayoutEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { switchTone } from "../store/tone";
import InstrumentButton from "../components/InstrumentButton";
import { PRIMARY } from "../constant/Colors";

function ScoreListScreen({ navigation }) {
  const tone = useSelector((state) => state.tone.value);
  const order = useSelector((state) => state.score.order).map((o) => o.id);
  const [showSpinner, setShowSpinner] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showSpinner) {
      dispatch(switchTone());
      setTimeout(() => {
        setShowSpinner(false);
      }, 10);
    }
  }, [showSpinner]);

  const getItemLayout = (data, index) => ({
    length: 120,
    offset: 120 * index,
    index,
  });

  const data = ScoreData(tone);
  const orderedData = data.sort((a, b) =>
    order.indexOf(a.key) > order.indexOf(b.key) ? 1 : -1
  );

  function historyPressHandler() {
    navigation.navigate("Historique");
  }

  function tonePressHandler() {
    setShowSpinner(true);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.headerRightContainer}>
            <InstrumentButton tone={tone} onPress={tonePressHandler} />
            <Button onPress={historyPressHandler} name="history" />
          </View>
        );
      },
    });
  }, [navigation, historyPressHandler, tonePressHandler]);

  function renderScoreItem(itemData) {
    return <Score sheet={itemData.item.value} id={itemData.item.key} />;
  }

  return (
    <View style={styles.container}>
      {showSpinner && <ActivityIndicator size="large" color={PRIMARY} />}
      {!showSpinner && (
        <FlatList
          getItemLayout={getItemLayout}
          data={orderedData}
          renderItem={renderScoreItem}
          initialNumToRender={25}
        />
      )}
    </View>
  );
}

export default ScoreListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center", 
    justifyContent: "center"
  },
  spinnerTextStyle: {
    color: PRIMARY,
  },
  headerRightContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
  },
});
