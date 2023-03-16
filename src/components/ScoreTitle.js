import { View, StyleSheet, Text } from "react-native";
import { Badge } from "react-native-elements";
import { useSelector } from "react-redux";
import Button from "./Button";
import { BADGE_COLORS } from "../constant/Colors";

function ScoreTitle({
  title,
  onRemoveOneOfHistory,
  onAddOneToHistory,
  scoreId,
}) {
  const history = useSelector((state) => state.history);
  let nbInHistory =
    history.filter((h) => h.value.scoreId === scoreId).length || 0;

  const getBadgeStyle = (nbInHistory) => {
    return {
      backgroundColor:
        BADGE_COLORS.length > nbInHistory
          ? BADGE_COLORS[nbInHistory].code
          : "black",
    };
  };

  const getBadgeTextStyle = (nbInHistory) => {
    return {
      color:
        BADGE_COLORS.length > nbInHistory
          ? BADGE_COLORS[nbInHistory].text
          : "white",
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.badgeContainer}>
        <Button name="minus" size={18} onPress={onRemoveOneOfHistory} />
        <Badge
          status="primary"
          value={nbInHistory}
          badgeStyle={getBadgeStyle(nbInHistory)}
          textStyle={getBadgeTextStyle(nbInHistory)}
        />
        <Button name="plus" size={18} onPress={onAddOneToHistory} />
      </View>
    </View>
  );
}
export default ScoreTitle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
  },
  badgeContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
