import { SERENADE_ID } from "../ScoreIdentifiers";
import SerenadeMib from "../scores-mib/SerenadeMib";
import SerenadeSib from "../scores-sib/SerenadeSib";

const Serenade = (tone) => {
  const sheetData = tone === "sib" ? SerenadeSib() : SerenadeMib();

  return {
    ...SERENADE_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default Serenade;
