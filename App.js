<<<<<<< HEAD
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import History from './src/components/History';
import Score from './src/components/Score';
import ScoreData from './src/data/ScoreData';
import moment from "moment";
import { Button } from 'react-native-elements';
import {openDatabase} from 'react-native-sqlite-storage';



export default function App() {

  const [isHistoryMode, setIsHistoryMode] = useState(false);
  const [historyData, setHistoryData] = useState([])

  const data = ScoreData();

  

  

  const closeHistoryHandler = () => {
    setIsHistoryMode(false);
  }

  const addToHistoryHandler = (scoreTitle, scoreNumber, scoreId) => {
    let currentDateTime = new Date()
    let currentDate = moment(currentDateTime).format("DD-MM-YYYY")
    let currentTime = moment(currentDateTime).format("HH:mm:ss")

    let historyItem = (
      {
        scoreTitle: scoreTitle,
        scoreNumber: scoreNumber,
        scoreId: scoreId,
        date: currentDate,
        time: currentTime
      }
    )

    setHistoryData(currentHistoryData => [
      { key: Math.random().toString(), value: historyItem },
      ...currentHistoryData
    ]);

  }

  const removeFromHistoryHandler = (historyId) => {
    setHistoryData(currentHistory => {
      return currentHistory.filter((history) => history.key !== historyId)
    })
  }

  const deleteAllFromHistoryHandler = () => {
    setHistoryData([])
  }
=======
import React from "react";
import { StyleSheet } from "react-native";
import ScoreListScreen from "./src/screens/ScoreListScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/store/store";

export default function App() {
  const Stack = createNativeStackNavigator();
>>>>>>> master

  return (
    <>
      <StatusBar backgroundColor="#ebe8e4" style="dark" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#ebe8e4" },
                headerTintColor: "black",
              }}
            >
              <Stack.Screen name="Annonces" component={ScoreListScreen} />
              <Stack.Screen name="Historique" component={HistoryScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: 15,
    paddingBottom: 50,
  },
});
