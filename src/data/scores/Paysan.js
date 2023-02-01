import PaysanMib from "../scores-mib/PaysanMib";
import PaysanSib from "../scores-sib/PaysanSib";

const Paysan = (tone) => {
  const sheetData = tone === "sib" ? PaysanSib() : PaysanMib();

  return {
    id: "paysan",
    title: "Paysan s'en va",
    number: 8,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default Paysan;
