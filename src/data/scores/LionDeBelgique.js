import LionDeBelgiqueMib from "../scores-mib/LionDeBelgiqueMib";
import LionDeBelgiqueSib from "../scores-sib/LionDeBelgiqueSib";

const LionDeBelgique = (tone) => {
  const sheetData = tone === "sib" ? LionDeBelgiqueSib() : LionDeBelgiqueMib();

  return {
    id: "lion-de-belgique",
    title: "Lion de Belgique",
    number: 2,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default LionDeBelgique;
