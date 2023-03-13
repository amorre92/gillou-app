import { PAS_DE_CHARGE_ID } from "../ScoreIdentifiers";
import PasDeChargeMib from "../scores-mib/PasDeChargeMib";
import PasDeChargeSib from "../scores-sib/PasDeChargeSib";

const PasDeCharge = (tone) => {
  const sheetData = tone === "sib" ? PasDeChargeSib() : PasDeChargeMib();

  return {
    ...PAS_DE_CHARGE_ID, 
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default PasDeCharge;
