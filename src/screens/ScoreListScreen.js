import { FlatList, StyleSheet } from "react-native";
import Score from "../components/Score";
import ScoreData from "../data/ScoreData";

const data = ScoreData();

function ScoreListScreen({onAddToHistory, historyData, onRemoveOneFromHistory}) {
  function renderScoreItem(itemData) {
    return (
      <Score
        sheet={itemData.item.value}
        onAddToHistory={onAddToHistory}
        onRemoveOneFromHistory={onRemoveOneFromHistory}
        nbInHistory={
          historyData.filter(
            (history) => history.value.scoreId === itemData.item.key
          ).length
        }
      />
    );
  }

  return (
    <FlatList style={styles.list} data={data} renderItem={renderScoreItem} />
  );
}

export default ScoreListScreen;

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
});
