import { AMBULANT_ID } from "../ScoreIdentifiers";
import AmbulantMib from "../scores-mib/AmbulantMib";
import AmbulantSib from "../scores-sib/AmbulantSib";

const Ambulant = (tone) => {
  const sheetData = tone === "sib" ? AmbulantSib() : AmbulantMib();

  return {
    ...AMBULANT_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default Ambulant;