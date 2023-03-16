import { LION_DE_BELGIQUE_ID } from "../ScoreIdentifiers";
import LionDeBelgiqueMib from "../scores-mib/LionDeBelgiqueMib";
import LionDeBelgiqueSib from "../scores-sib/LionDeBelgiqueSib";

const LionDeBelgique = (tone) => {
  const sheetData = tone === "sib" ? LionDeBelgiqueSib() : LionDeBelgiqueMib();

  return {
    ...LION_DE_BELGIQUE_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default LionDeBelgique;
