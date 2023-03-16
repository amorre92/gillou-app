import AirClassiqueMib from "../scores-mib/AirClassiqueMib";
import AirClassiqueSib from "../scores-sib/AirClassiqueSib";
import { AIR_CLASSIQUE_ID } from "../ScoreIdentifiers";

const AirClassique = (tone) => {
  const sheetData = tone === "sib" ? AirClassiqueSib() : AirClassiqueMib();

  return {
    ...AIR_CLASSIQUE_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default AirClassique;
