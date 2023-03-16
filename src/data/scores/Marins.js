import { MARINS_ID } from "../ScoreIdentifiers";
import MarinsMib from "../scores-mib/MarinsMib";
import MarinsSib from "../scores-sib/MarinsSib";

const Marins = (tone) => {
  const sheetData = tone === "sib" ? MarinsSib() : MarinsMib();

  return {
    ...MARINS_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default Marins;
