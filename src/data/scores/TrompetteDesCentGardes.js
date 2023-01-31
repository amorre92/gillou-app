import TrompetteDesCentGardesMib from "../scores-mib/TrompetteDesCentGardesMib";
import TrompetteDesCentGardesSib from "../scores-sib/TrompetteDesCentGardesSib";

const TrompetteDesCentGardes = (tone) => {
  const sheetData =
    tone === "sib" ? TrompetteDesCentGardesSib() : TrompetteDesCentGardesMib();

  return {
    id: "trompette-des-cent-gardes",
    title: "Trompette des cent gardes",
    number: 22,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default TrompetteDesCentGardes;
