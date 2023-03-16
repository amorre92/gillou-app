import { PAYSAN_ID } from "../ScoreIdentifiers";
import PaysanMib from "../scores-mib/PaysanMib";
import PaysanSib from "../scores-sib/PaysanSib";

const Paysan = (tone) => {
  const sheetData = tone === "sib" ? PaysanSib() : PaysanMib();

  return {
    ...PAYSAN_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default Paysan;
