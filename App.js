import React, { useState } from "react";
import { StyleSheet } from "react-native";
import moment from "moment";
import ScoreListScreen from "./src/screens/ScoreListScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const [historyData, setHistoryData] = useState([]);

  const addToHistoryHandler = (scoreTitle, scoreNumber, scoreId) => {
    let currentDateTime = new Date();
    let currentDate = moment(currentDateTime).format("DD-MM-YYYY");
    let currentTime = moment(currentDateTime).format("HH:mm:ss");

    let historyItem = {
      scoreTitle: scoreTitle,
      scoreNumber: scoreNumber,
      scoreId: scoreId,
      date: currentDate,
      time: currentTime,
    };

    setHistoryData((currentHistoryData) => [
      { key: Math.random().toString(), value: historyItem },
      ...currentHistoryData,
    ]);
  };

  const removeFromHistoryHandler = (historyId) => {
    setHistoryData((currentHistory) => {
      return currentHistory.filter((history) => history.key !== historyId);
    });
  };

  const removeLastScoreIdFromHistoryHandler = (scoreId) => {
    if (historyData) {
      let items = historyData.filter((history) => history.value.scoreId === scoreId)
      if (items && items.length > 0) {
        return removeFromHistoryHandler(items[0].key)
      }
    }
  }

  const deleteAllFromHistoryHandler = () => {
    setHistoryData([]);
  };

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Annonces"
            children={({navigation}) => (
              <ScoreListScreen onAddToHistory={addToHistoryHandler} historyData={historyData} onRemoveOneFromHistory={removeLastScoreIdFromHistoryHandler} navigation={navigation}/>
            )}
          />
          <Stack.Screen
            name="Historique"
            children={({navigation}) => (
              <HistoryScreen
                onRemoveFromHistory={removeFromHistoryHandler}
                onDeleteAll={deleteAllFromHistoryHandler}
                data={historyData}
                navigation={navigation}
              />
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: 15,
    paddingBottom: 50,
  },
});
