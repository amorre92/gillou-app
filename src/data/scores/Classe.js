import ClasseMib from "../scores-mib/ClasseMib";
import ClasseSib from "../scores-sib/ClasseSib";

const Classe = (tone) => {
  const sheetData = tone === "sib" ? ClasseSib() : ClasseMib();

  return {
    id: "classe",
    title: "La classe",
    number: 12,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default Classe;
