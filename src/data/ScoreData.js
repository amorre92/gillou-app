import AirClassique from "./scores/AirClassique";
import Ambulant from "./scores/Ambulant";
import Arlequin from "./scores/Arlequin";
import Brigands from "./scores/Brigands";
import Cavalcade from "./scores/Cavalcade";
import Chasseurs from "./scores/Chasseurs";
import Classe from "./scores/Classe";
import DginsDeLestene from "./scores/DginsDeLestene";
import Doudou from "./scores/Doudou";
import EloiACharleroi from "./scores/EloiACharleroi";
import JuifErrant from "./scores/JuifErrant";
import LionDeBelgique from "./scores/LionDeBelgique";
import Marins from "./scores/Marins";
import MereTantPis from "./scores/MereTantPis";
import PasDeCharge from "./scores/PasDeCharge";
import Paysan from "./scores/Paysan";
import PetitJeuneHommeDeBinche from "./scores/PetitJeuneHommeDeBinche";
import PolkaMarche from "./scores/PolkaMarche";
import PostillonDeLongjumeau from "./scores/PostillonDeLongjumeau";
import QuandMgrandMere from "./scores/QuandMgrandMere";
import SansSouci from "./scores/SansSouci";
import Serenade from "./scores/Serenade";
import TrompetteDesCentGardes from "./scores/TrompetteDesCentGardes";
import ViventLesBleus from "./scores/ViventLesBleus";
import VosArezInAubade from "./scores/VosArezInAubade";
import MitantDesCamps from "./scores/MitantDesCamps";
import AubadeMatinale from "./scores/AubadeMatinale";

const ScoreData = (tone) => {
  const airClassique = AirClassique(tone);
  const lionDeBelgique = LionDeBelgique(tone);
  const postillonDeLongjumeau = PostillonDeLongjumeau(tone);
  const sansSouci = SansSouci(tone);
  const petitJeuneHommeDeBinche = PetitJeuneHommeDeBinche(tone);
  const ambulant = Ambulant(tone);
  const viventLesBleus = ViventLesBleus(tone);
  const paysan = Paysan(tone);
  const eloiACharleroi = EloiACharleroi(tone);
  const cavalcade = Cavalcade(tone);
  const juifErrant = JuifErrant(tone);
  const classe = Classe(tone);
  const serenade = Serenade(tone);
  const pasDeCharge = PasDeCharge(tone);
  const mereTantPis = MereTantPis(tone);
  const vosArezInAubade = VosArezInAubade(tone);
  const arlequin = Arlequin(tone);
  const dginsDeLestene = DginsDeLestene(tone);
  const doudou = Doudou(tone);
  const quandMgrandMere = QuandMgrandMere(tone);
  const chasseurs = Chasseurs(tone);
  const trompetteDesCentGardes = TrompetteDesCentGardes(tone);
  const marins = Marins(tone);
  const brigands = Brigands(tone);
  const polkaMarche = PolkaMarche(tone);
  const aubadeMatinale = AubadeMatinale(tone);
  const mitantDesCamps = MitantDesCamps(tone);

  return [
    { key: airClassique.id, value: airClassique },
    { key: lionDeBelgique.id, value: lionDeBelgique },
    { key: postillonDeLongjumeau.id, value: postillonDeLongjumeau },
    { key: sansSouci.id, value: sansSouci },
    { key: petitJeuneHommeDeBinche.id, value: petitJeuneHommeDeBinche },
    { key: ambulant.id, value: ambulant },
    { key: viventLesBleus.id, value: viventLesBleus },
    { key: paysan.id, value: paysan },
    { key: eloiACharleroi.id, value: eloiACharleroi },
    { key: cavalcade.id, value: cavalcade },
    { key: juifErrant.id, value: juifErrant },
    { key: classe.id, value: classe },
    { key: serenade.id, value: serenade },
    { key: pasDeCharge.id, value: pasDeCharge },
    { key: mereTantPis.id, value: mereTantPis },
    { key: vosArezInAubade.id, value: vosArezInAubade },
    { key: arlequin.id, value: arlequin },
    { key: dginsDeLestene.id, value: dginsDeLestene },
    { key: doudou.id, value: doudou },
    { key: quandMgrandMere.id, value: quandMgrandMere },
    { key: chasseurs.id, value: chasseurs },
    { key: trompetteDesCentGardes.id, value: trompetteDesCentGardes },
    { key: marins.id, value: marins },
    { key: brigands.id, value: brigands },
    { key: polkaMarche.id, value: polkaMarche },
    { key: aubadeMatinale.id, value: aubadeMatinale },
    { key: mitantDesCamps.id, value: mitantDesCamps },
  ];
};
export default ScoreData;
