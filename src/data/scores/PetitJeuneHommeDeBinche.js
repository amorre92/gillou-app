import Vex from "vexflow";
import PetitJeuneHommeDeBincheMib from "../scores-mib/PetitJeuneHommeDeBincheMib";
import PetitJeuneHommeDeBincheSib from "../scores-sib/PetitJeuneHommeDeBincheSib";

const PetitJeuneHommeDeBinche = (tone) => {
  let sheetData =
    tone === "sib"
      ? PetitJeuneHommeDeBincheSib()
      : PetitJeuneHommeDeBincheMib();

  return {
    id: "petit-jeune-homme-de-binche",
    title: "Le petit jeune homme de Binche",
    number: 5,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default PetitJeuneHommeDeBinche;
