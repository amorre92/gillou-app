import DoudouMib from "../scores-mib/DoudouMib";
import DoudouSib from "../scores-sib/DoudouSib";

const Doudou = (tone) => {
  const sheetData = tone === "sib" ? DoudouSib() : DoudouMib();

  return {
    id: "doudou",
    title: "El doudou",
    number: 19,
    clef: "treble",
    timeSignature: "6/8",
    ...sheetData,
  };
};

export default Doudou;
