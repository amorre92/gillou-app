import React from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { ListItem } from "react-native-elements";
import { useLayoutEffect } from "react";

import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromHistory, removeFromHistory } from "../store/history";

function HistoryScreen({ navigation }) {
  const history = useSelector((state) => state.history);
  const dispatch = useDispatch();

  const deleteAllHandler = () => {
    dispatch(removeAllFromHistory())
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button onPress={deleteAllHandler} name="trash-can-outline" />;
      },
    });
  }, [navigation, deleteAllHandler]);

  const removeFromHistoryHandler = (historyId) => {
    dispatch(removeFromHistory(historyId))
  };

  return (
    <View style={styles.historyContainer}>
      <FlatList
        data={history}
        renderItem={(itemData) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>
                {itemData.item.value.scoreNumber +
                  " - " +
                  itemData.item.value.scoreTitle}
              </ListItem.Title>
              <ListItem.Subtitle>
                {itemData.item.value.date + " - " + itemData.item.value.time}
              </ListItem.Subtitle>
            </ListItem.Content>
            <Button
              onPress={() => removeFromHistoryHandler(itemData.item.key)}
              name="trash-can"
            />
          </ListItem>
        )}
      />
    </View>
  );
}

export default HistoryScreen;

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
