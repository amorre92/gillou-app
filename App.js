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

  return (
    <View style={styles.screen}>
      <History visible={isHistoryMode} onCloseHistory={closeHistoryHandler} onRemoveFromHistory={removeFromHistoryHandler} onDeleteAll={deleteAllFromHistoryHandler} data={historyData} />
      <FlatList
        style={styles.list}
        data={data}
        renderItem={
          itemData => (
            <Score
              sheet={itemData.item.value}
              onAddToHistory={addToHistoryHandler}
              nbInHistory={historyData.filter((history) => history.value.scoreId === itemData.item.key).length} />)
        } />
      <Button
        title='Historique'
        onPress={() => setIsHistoryMode(true)}
        buttonStyle={{
          borderColor: '#fc861d',
          marginHorizontal: 10
        }}
        type="outline"
        titleStyle={{ color: '#fc861d' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 15,
    paddingBottom: 50
  },
  list: {
    marginTop: 10,
    marginBottom: 10
  }
});
