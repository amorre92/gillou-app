import { CHASSEURS_ID } from "../ScoreIdentifiers";
import ChasseursMib from "../scores-mib/ChasseursMib";
import ChasseursSib from "../scores-sib/ChasseursSib";

const Chasseurs = (tone) => {
  const sheetData = tone === "sib" ? ChasseursSib() : ChasseursMib();

  return {
    ...CHASSEURS_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default Chasseurs;
