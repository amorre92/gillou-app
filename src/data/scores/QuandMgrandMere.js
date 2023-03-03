import QuandMgrandMereMib from "../scores-mib/QuandMgrandMereMib";
import QuandMgrandMereSib from "../scores-sib/QuandMgrandMereSib";

const QuandMgrandMere = (tone) => {
  const sheetData =
    tone === "sib" ? QuandMgrandMereSib() : QuandMgrandMereMib();

  return {
    id: "quand-mgrand-mere",
    title: "Quand m'grand mère",
    number: 20,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default QuandMgrandMere;
