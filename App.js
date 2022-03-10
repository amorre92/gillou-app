import { StyleSheet, View, FlatList } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Score from './src/components/Score';
import AirClassique from './src/scores/AirClassique';
import Ambulant from './src/scores/Ambulant';
import Arlequin from './src/scores/Arlequin';
import Brigands from './src/scores/Brigands';
import Cavalcade from './src/scores/Cavalcade';
import Chasseurs from './src/scores/Chasseurs';
import Classe from './src/scores/Classe';
import DginsDeLestene from './src/scores/DginsDeLestene';
import Doudou from './src/scores/Doudou';
import EloiACharleroi from './src/scores/EloiACharleroi';
import JuifErrant from './src/scores/JuifErrant';
import LionDeBelgique from './src/scores/LionDeBelgique';
import Marins from './src/scores/Marins';
import MereTantPis from './src/scores/MereTantPis';
import PasDeCharge from './src/scores/PasDeCharge';
import Paysan from './src/scores/Paysan';
import PetitJeuneHommeDeBinche from './src/scores/PetitJeuneHommeDeBinche';
import PolkaMarche from './src/scores/PolkaMarche';
import PostillonDeLongjumeau from './src/scores/PostillonDeLongjumeau';
import QuandMgrandMere from './src/scores/QuandMgrandMere';
import SansSouci from './src/scores/SansSouci';
import Serenade from './src/scores/Serenade';
import TrompetteDesCentGardes from './src/scores/TrompetteDesCentGardes';
import ViventLesBleus from './src/scores/ViventLesBleus';
import VosArezInAubade from './src/scores/VosArezInAubade';

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
  const cavalcade = Cavalcade();
  const juifErrant = JuifErrant();
  const classe = Classe();
  const serenade = Serenade();
  const pasDeCharge = PasDeCharge();
  const mereTantPis = MereTantPis();
  const vosArezInAubade = VosArezInAubade();
  const arlequin = Arlequin();
  const dginsDeLestene = DginsDeLestene();
  const doudou = Doudou();
  const quandMgrandMere= QuandMgrandMere();
  const chasseurs = Chasseurs();
  const trompetteDesCentGardes = TrompetteDesCentGardes();
  const marins = Marins();
  const brigands = Brigands();
  const polkaMarche = PolkaMarche();

  const data = [
    {key: airClassique.id, value: airClassique}, 
    {key: lionDeBelgique.id, value: lionDeBelgique},
    {key: postillonDeLongjumeau.id, value: postillonDeLongjumeau},
    {key: sansSouci.id, value: sansSouci},
    {key: petitJeuneHommeDeBinche.id, value: petitJeuneHommeDeBinche},
    {key: ambulant.id, value: ambulant},
    {key: viventLesBleus.id, value: viventLesBleus},
    {key: paysan.id, value: paysan},
    {key: eloiACharleroi.id, value: eloiACharleroi},
    {key: cavalcade.id, value: cavalcade},
    {key: juifErrant.id, value: juifErrant},
    {key: classe.id, value: classe},
    {key: serenade.id, value: serenade},
    {key: pasDeCharge.id, value: pasDeCharge},
    {key: mereTantPis.id, value: mereTantPis},
    {key: vosArezInAubade.id, value: vosArezInAubade},
    {key: arlequin.id, value: arlequin},
    {key: dginsDeLestene.id, value: dginsDeLestene},
    {key: doudou.id, value: doudou},
    {key: quandMgrandMere.id, value: quandMgrandMere},
    {key: chasseurs.id, value: chasseurs},
    {key: trompetteDesCentGardes.id, value: trompetteDesCentGardes},
    {key: marins.id, value: marins},
    {key: brigands.id, value: brigands},
    {key: polkaMarche.id, value: polkaMarche}
    
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
