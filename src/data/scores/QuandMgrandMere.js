import { QUAND_MGRAND_MERE_ID } from "../ScoreIdentifiers";
import QuandMgrandMereMib from "../scores-mib/QuandMgrandMereMib";
import QuandMgrandMereSib from "../scores-sib/QuandMgrandMereSib";

const QuandMgrandMere = (tone) => {
  const sheetData =
    tone === "sib" ? QuandMgrandMereSib() : QuandMgrandMereMib();

  return {
    ...QUAND_MGRAND_MERE_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default QuandMgrandMere;
