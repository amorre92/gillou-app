import { POLKA_MARCHE_ID } from "../ScoreIdentifiers";
import PolkaMarcheMib from "../scores-mib/PolkaMarcheMib";
import PolkaMarcheSib from "../scores-sib/PolkaMarcheSib";

const PolkaMarche = (tone) => {
  const sheetData = tone === "sib" ? PolkaMarcheSib() : PolkaMarcheMib();

  return {
    ...POLKA_MARCHE_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default PolkaMarche;
