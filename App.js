import { StyleSheet, View } from 'react-native';
import Score from './src/components/Score';
import AirClassique from './src/scores/AirClassique';

export default function App() {
  
  let data = AirClassique();

  return (
    <View style={styles.screen}>
      <Score title='1 - Air Classique' sheet={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20
  }
});
