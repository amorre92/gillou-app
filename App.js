import { StyleSheet, View, FlatList } from 'react-native';
import Score from './src/components/Score';
import AirClassique from './src/scores/AirClassique';
import LionDeBelgique from './src/scores/LionDeBelgique';

export default function App() {
  
  const airClassique = AirClassique();
  const lionDeBelgique = LionDeBelgique();

  const data = [
    {key: airClassique.id, value: airClassique}, 
    {key: lionDeBelgique.id, value: lionDeBelgique},
    {key: airClassique.id + ' bis', value: airClassique}, 
    {key: lionDeBelgique.id + ' bis', value: lionDeBelgique},
    {key: airClassique.id + ' tr', value: airClassique}, 
    {key: lionDeBelgique.id + ' tr', value: lionDeBelgique}
  ]

  return (
    <View style={styles.screen}>
      <FlatList 
        data={data}
        renderItem={
          itemData => (<Score sheet={itemData.item.value} />)
        }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20
  }
});
