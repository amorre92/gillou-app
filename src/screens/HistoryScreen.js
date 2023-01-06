import React from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { Button, ListItem } from "react-native-elements";
import { useLayoutEffect } from "react";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function HistoryScreen({ onRemoveFromHistory, onDeleteAll, data, navigation }) {

  const deleteAllHandler = () => {
    onDeleteAll();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={deleteAllHandler}
              android_ripple={{ color: "grey" }}
              style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
              ]}
            >
              <Icon name="trash-can-outline" size={24} color="#fc861d" />
            </Pressable>
          </View>
        );
      },
    });
  }, [navigation, deleteAllHandler]);

  const removeFromHistoryHandler = (historyId) => {
    onRemoveFromHistory(historyId);
  };

  return (
    <View style={styles.historyContainer}>
      <FlatList
        data={data}
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
              icon={() => <Icon name="trash-can" size={24} color="#fc861d" />}
              buttonStyle={{ backgroundColor: "white" }}
              onPress={() => removeFromHistoryHandler(itemData.item.key)}
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
    paddingTop: 10,
    backgroundColor: "white",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  button: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonContainer: {
    overflow: "hidden",
    width: "30%", 
    borderRadius: 8
  }
});
