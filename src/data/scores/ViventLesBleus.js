import { VIVENT_LES_BLEUS_ID } from "../ScoreIdentifiers";
import ViventLesBleusMib from "../scores-mib/ViventLesBleusMib";
import ViventLesBleusSib from "../scores-sib/ViventLesBleusSib";

const ViventLesBleus = (tone) => {
  const sheetData = tone === "sib" ? ViventLesBleusSib() : ViventLesBleusMib();

  return {
    ...VIVENT_LES_BLEUS_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default ViventLesBleus;
