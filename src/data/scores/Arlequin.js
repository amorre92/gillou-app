import { ARLEQUIN_ID } from "../ScoreIdentifiers";
import ArlequinMib from "../scores-mib/ArlequinMib";
import ArlequinSib from "../scores-sib/ArlequinSib";

const Arlequin = (tone) => {
  const sheetData = tone === "sib" ? ArlequinSib() : ArlequinMib();

  return {
    ...ARLEQUIN_ID,
    clef: "treble",
    timeSignature: "6/8",
    ...sheetData,
  };
};

export default Arlequin;
