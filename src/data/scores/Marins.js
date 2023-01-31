import MarinsMib from "../scores-mib/MarinsMib";
import MarinsSib from "../scores-sib/MarinsSib";

const Marins = (tone) => {
  const sheetData = tone === "sib" ? MarinsSib() : MarinsMib();

  return {
    id: "marins",
    title: "Les marins",
    number: 23,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default Marins;
