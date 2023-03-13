import { VOS_AREZ_IN_AUBADE_ID } from "../ScoreIdentifiers";
import VosArezInAubadeMib from "../scores-mib/VosArezInAubadeMib";
import VosArezInAubadeSib from "../scores-sib/VosArezInAubadeSib";

const VosArezInAubade = (tone) => {
  const sheetData =
    tone === "sib" ? VosArezInAubadeSib() : VosArezInAubadeMib();

  return {
    ...VOS_AREZ_IN_AUBADE_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default VosArezInAubade;
