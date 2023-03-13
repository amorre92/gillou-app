import { DGINS_DE_LESTENE_ID } from "../ScoreIdentifiers";
import DginsDeLesteneMib from "../scores-mib/DginsDeLesteneMib";
import DginsDeLesteneSib from "../scores-sib/DginsDeLesteneSib";

const DginsDeLestene = (tone) => {
  const sheetData = tone === "sib" ? DginsDeLesteneSib() : DginsDeLesteneMib();

  return {
    ...DGINS_DE_LESTENE_ID,
    clef: "treble",
    timeSignature: "6/8",
    ...sheetData,
  };
};

export default DginsDeLestene;
