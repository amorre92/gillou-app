import { TROMPETTE_DES_CENT_GARDES_ID } from "../ScoreIdentifiers";
import TrompetteDesCentGardesMib from "../scores-mib/TrompetteDesCentGardesMib";
import TrompetteDesCentGardesSib from "../scores-sib/TrompetteDesCentGardesSib";

const TrompetteDesCentGardes = (tone) => {
  const sheetData =
    tone === "sib" ? TrompetteDesCentGardesSib() : TrompetteDesCentGardesMib();

  return {
    ...TROMPETTE_DES_CENT_GARDES_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default TrompetteDesCentGardes;
