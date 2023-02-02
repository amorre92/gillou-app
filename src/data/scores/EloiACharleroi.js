import EloiACharleroiMib from "../scores-mib/EloiACharleroiMib";
import EloiACharleroiSib from "../scores-sib/EloiACharleroiSib";

const EloiACharleroi = (tone) => {
  const sheetData = tone === "sib" ? EloiACharleroiSib() : EloiACharleroiSib()//EloiACharleroiMib();

  return {
    id: "eloi-a-charleroi",
    title: "Eloi à charleroi",
    number: 9,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default EloiACharleroi;
