import React, { useState } from "react";
import { StyleSheet } from "react-native";
import moment from "moment";
import ScoreListScreen from "./src/screens/ScoreListScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';

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

  const deleteAllFromHistoryHandler = () => {
    setHistoryData([]);
  };

  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Partitions') {
              iconName = 'fa-music'
            } else if (route.name === 'Settings') {
              iconName = 'fa-history'
            }

            // You can return any component that you like here!
          
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen
            name="Partitions"
            children={() => (
              <ScoreListScreen onAddToHistory={addToHistoryHandler} historyData={historyData} />
            )}
          />
          <Tab.Screen
            name="Historique"
            children={() => (
              <HistoryScreen
                onRemoveFromHistory={removeFromHistoryHandler}
                onDeleteAll={deleteAllFromHistoryHandler}
                data={historyData}
              />
            )}
          />
        </Tab.Navigator>
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
