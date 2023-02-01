import PasDeChargeMib from "../scores-mib/PasDeChargeMib";
import PasDeChargeSib from "../scores-sib/PasDeChargeSib";

const PasDeCharge = (tone) => {
  const sheetData = tone === "sib" ? PasDeChargeSib() : PasDeChargeMib();

  return {
    id: "pas-de-charge",
    title: "Pas de charge",
    number: 14,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default PasDeCharge;
