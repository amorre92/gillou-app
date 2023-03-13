import { CLASSE_ID } from "../ScoreIdentifiers";
import ClasseMib from "../scores-mib/ClasseMib";
import ClasseSib from "../scores-sib/ClasseSib";

const Classe = (tone) => {
  const sheetData = tone === "sib" ? ClasseSib() : ClasseMib();

  return {
    ...CLASSE_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default Classe;
