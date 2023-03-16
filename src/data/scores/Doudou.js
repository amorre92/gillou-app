import { DOUDOU_ID } from "../ScoreIdentifiers";
import DoudouMib from "../scores-mib/DoudouMib";
import DoudouSib from "../scores-sib/DoudouSib";

const Doudou = (tone) => {
  const sheetData = tone === "sib" ? DoudouSib() : DoudouMib();

  return {
    ...DOUDOU_ID,
    clef: "treble",
    timeSignature: "6/8",
    ...sheetData,
  };
};

export default Doudou;
