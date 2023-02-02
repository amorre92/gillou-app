import { FlatList, StyleSheet, View } from "react-native";
import Score from "../components/Score";
import ScoreData from "../data/ScoreData";
import { useLayoutEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { switchTone } from "../store/tone";
import InstrumentButton from "../components/InstrumentButton";

function ScoreListScreen({ navigation }) {
  const tone = useSelector((state) => state.tone.value);
  const dispatch = useDispatch();

  const getItemLayout = (data, index) => ({
    length: 100,
    offset: 100 * index,
    index,
  });

  const data = ScoreData(tone);

  function historyPressHandler() {
    navigation.navigate("Historique");
  }

  function tonePressHandler() {
    dispatch(switchTone());
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
    <FlatList
      getItemLayout={getItemLayout}
      style={styles.list}
      data={data}
      renderItem={renderScoreItem}
      initialNumToRender={5}
      maxToRenderPerBatch={10}
      windowSize={10}
    />
  );
}

export default ScoreListScreen;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  headerRightContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
  },
});
