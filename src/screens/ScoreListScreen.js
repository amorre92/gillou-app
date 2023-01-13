import { FlatList, StyleSheet } from "react-native";
import Score from "../components/Score";
import ScoreData from "../data/ScoreData";
import { useLayoutEffect } from "react";
import Button from "../components/Button";

const data = ScoreData();

function ScoreListScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("Historique");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button onPress={pressHandler} name="history" />;
      },
    });
  }, [navigation, pressHandler]);

  function renderScoreItem(itemData) {
    return <Score sheet={itemData.item.value} />;
  }

  return (
    <FlatList style={styles.list} data={data} renderItem={renderScoreItem} />
  );
}

export default ScoreListScreen;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
