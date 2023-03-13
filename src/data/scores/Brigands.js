import { BRIGANDS_ID } from "../ScoreIdentifiers";
import BrigandsMib from "../scores-mib/BrigandsMib";
import BrigandsSib from "../scores-sib/BrigandsSib";

const Brigands = (tone) => {
  const sheetData = tone === "sib" ? BrigandsSib() : BrigandsMib();

  return {
    ...BRIGANDS_ID,
    clef: "treble",
    timeSignature: "6/8",
    ...sheetData,
  };
};

export default Brigands;
