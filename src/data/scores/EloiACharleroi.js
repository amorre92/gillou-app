import { ELOI_A_CHARLEROI_ID } from "../ScoreIdentifiers";
import EloiACharleroiMib from "../scores-mib/EloiACharleroiMib";
import EloiACharleroiSib from "../scores-sib/EloiACharleroiSib";

const EloiACharleroi = (tone) => {
  const sheetData = tone === "sib" ? EloiACharleroiSib() : EloiACharleroiMib();

  return {
    ...ELOI_A_CHARLEROI_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default EloiACharleroi;
