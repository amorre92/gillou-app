import { CAVALCADE_ID } from "../ScoreIdentifiers";
import CavalcadeMib from "../scores-mib/CavalcadeMib";
import CavalcadeSib from "../scores-sib/CavalcadeSib";

const Cavalcade = (tone) => {
  const sheetData = tone === "sib" ? CavalcadeSib() : CavalcadeMib();

  return {
    ...CAVALCADE_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default Cavalcade;
