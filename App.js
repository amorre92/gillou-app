import { StyleSheet, View, FlatList } from 'react-native';
import Score from './src/components/Score';
import AirClassique from './src/scores/AirClassique';
import LionDeBelgique from './src/scores/LionDeBelgique';
import PetitJeuneHommeDeBinche from './src/scores/PetitJeuneHommeDeBinche';
import PostillonDeLongjumeau from './src/scores/PostillonDeLongjumeau';
import SansSouci from './src/scores/SansSouci';

export default function App() {
  
  const airClassique = AirClassique();
  const lionDeBelgique = LionDeBelgique();
  const postillonDeLongjumeau = PostillonDeLongjumeau();
  const sansSouci = SansSouci();
  const petitJeuneHommeDeBinche = PetitJeuneHommeDeBinche();

  const data = [
    {key: airClassique.id, value: airClassique}, 
    {key: lionDeBelgique.id, value: lionDeBelgique},
    {key: postillonDeLongjumeau.id, value: postillonDeLongjumeau},
    {key: sansSouci.id, value: sansSouci},
    {key: petitJeuneHommeDeBinche.id, value: petitJeuneHommeDeBinche},
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
    padding: 10, 
    paddingTop: 50
  }
});
