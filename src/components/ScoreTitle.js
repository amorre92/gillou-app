import { View, StyleSheet, Text } from "react-native";
import { Badge } from "react-native-elements";
import { useSelector } from "react-redux";
import Button from "./Button";

const badgeColors = [
  {
    key: 0,
    code: "#FFFFFF",
    text: "#000000",
  },
  {
    key: 1,
    code: "#f0f0f0",
    text: "#000000",
  },
  {
    key: 2,
    code: "#ffffb2",
    text: "#000000",
  },
  {
    key: 3,
    code: "#fed976",
    text: "#000000",
  },
  {
    key: 4,
    code: "#fc861d",
    text: "#000000",
  },
  {
    key: 5,
    code: "#fc4e2a",
    text: "#FFFFFF",
  },
  {
    key: 6,
    code: "#e31a1c",
    text: "#FFFFFF",
  },
  {
    key: 7,
    code: "#b10026",
    text: "#FFFFFF",
  },
  {
    key: 8,
    code: "#780000",
    text: "#FFFFFF",
  },
];

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
        badgeColors.length > nbInHistory
          ? badgeColors[nbInHistory].code
          : "black",
    };
  };

  const getBadgeTextStyle = (nbInHistory) => {
    return {
      color:
        badgeColors.length > nbInHistory
          ? badgeColors[nbInHistory].text
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
