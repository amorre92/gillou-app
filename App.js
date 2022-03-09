import { StyleSheet, View, FlatList } from 'react-native';
import Score from './src/components/Score';
import AirClassique from './src/scores/AirClassique';
import Ambulant from './src/scores/Ambulant';
import EloiACharleroi from './src/scores/EloiACharleroi';
import LionDeBelgique from './src/scores/LionDeBelgique';
import Paysan from './src/scores/Paysan';
import PetitJeuneHommeDeBinche from './src/scores/PetitJeuneHommeDeBinche';
import PostillonDeLongjumeau from './src/scores/PostillonDeLongjumeau';
import SansSouci from './src/scores/SansSouci';
import ViventLesBleus from './src/scores/ViventLesBleus';

export default function App() {
  
  const airClassique = AirClassique();
  const lionDeBelgique = LionDeBelgique();
  const postillonDeLongjumeau = PostillonDeLongjumeau();
  const sansSouci = SansSouci();
  const petitJeuneHommeDeBinche = PetitJeuneHommeDeBinche();
  const ambulant = Ambulant();
  const viventLesBleus = ViventLesBleus();
  const paysan = Paysan();
  const eloiACharleroi = EloiACharleroi();

  const data = [
    {key: airClassique.id, value: airClassique}, 
    {key: lionDeBelgique.id, value: lionDeBelgique},
    {key: postillonDeLongjumeau.id, value: postillonDeLongjumeau},
    {key: sansSouci.id, value: sansSouci},
    {key: petitJeuneHommeDeBinche.id, value: petitJeuneHommeDeBinche},
    {key: ambulant.id, value: ambulant},
    {key: viventLesBleus.id, value: viventLesBleus},
    {key: paysan.id, value: paysan},
    {key: eloiACharleroi.id, value: eloiACharleroi}
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
