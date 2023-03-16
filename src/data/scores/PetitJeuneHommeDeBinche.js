import { PETIT_JEUNE_HOMME_DE_BINCHE_ID } from "../ScoreIdentifiers";
import PetitJeuneHommeDeBincheMib from "../scores-mib/PetitJeuneHommeDeBincheMib";
import PetitJeuneHommeDeBincheSib from "../scores-sib/PetitJeuneHommeDeBincheSib";

const PetitJeuneHommeDeBinche = (tone) => {
  const sheetData =
    tone === "sib"
      ? PetitJeuneHommeDeBincheSib()
      : PetitJeuneHommeDeBincheMib();

  return {
    ...PETIT_JEUNE_HOMME_DE_BINCHE_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default PetitJeuneHommeDeBinche;
