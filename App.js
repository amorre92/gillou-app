import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import History from './src/components/History';
import Score from './src/components/Score';
import ScoreData from './src/data/ScoreData';
import moment from "moment";

export default function App() {
  
  const [isHistoryMode, setIsHistoryMode] = useState(false);
  const [historyData, setHistoryData] = useState([])

  const data = ScoreData();

  const closeHistoryHandler = () => {
    setIsHistoryMode(false);
  }

  const addToHistoryHandler = (scoreTitle, scoreNumber, scoreId) => {
    console.log(scoreTitle)
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
      { key: Math.random().toString(), value: historyItem},
      ...currentHistoryData      
    ]);

  }

  return (
    <View style={styles.screen}>
      <History visible={isHistoryMode} onCloseHistory={closeHistoryHandler} data={historyData}/>
      <FlatList
        data={data}
        renderItem={
          itemData => (<Score sheet={itemData.item.value} onAddToHistory={addToHistoryHandler}/>)
        } />
        <Button title='Historique' onPress={() => setIsHistoryMode(true)} color="#fc861d"/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    paddingTop: 50, 
    paddingBottom: 50
  }
});
