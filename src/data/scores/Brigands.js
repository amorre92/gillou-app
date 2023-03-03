import BrigandsMib from "../scores-mib/BrigandsMib";
import BrigandsSib from "../scores-sib/BrigandsSib";

const Brigands = (tone) => {
  const sheetData = tone === "sib" ? BrigandsSib() : BrigandsMib();

  return {
    id: "brigands",
    title: "Les Brigands",
    number: 24,
    clef: "treble",
    timeSignature: "6/8",
    ...sheetData,
  };
};

export default Brigands;
