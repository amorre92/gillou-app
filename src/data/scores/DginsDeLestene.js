import DginsDeLesteneMib from "../scores-mib/DginsDeLesteneMib";
import DginsDeLesteneSib from "../scores-sib/DginsDeLesteneSib";

const DginsDeLestene = (tone) => {
  const sheetData = tone === "sib" ? DginsDeLesteneSib() : DginsDeLesteneMib();

  return {
    id: "dgins-de-lestene",
    title: "Les d'gins de l'Estène",
    number: 18,
    clef: "treble",
    timeSignature: "6/8",
    ...sheetData,
  };
};

export default DginsDeLestene;
