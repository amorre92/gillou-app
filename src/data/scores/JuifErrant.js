import { JUIF_ERRANT_ID } from "../ScoreIdentifiers";
import JuifErrantMib from "../scores-mib/JuifErrantMib";
import JuifErrantSib from "../scores-sib/JuifErrantSib";

const JuifErrant = (tone) => {
  const sheetData = tone === "sib" ? JuifErrantSib() : JuifErrantMib();

  return {
    ...JUIF_ERRANT_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default JuifErrant;
