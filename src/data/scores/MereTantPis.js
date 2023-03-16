import { MERE_TANT_PIS_ID } from "../ScoreIdentifiers";
import MereTantPisMib from "../scores-mib/MereTantPisMib";
import MereTantPisSib from "../scores-sib/MereTantPisSib";

const MereTantPis = (tone) => {
  const sheetData = tone === "sib" ? MereTantPisSib() : MereTantPisMib();

  return {
    ...MERE_TANT_PIS_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default MereTantPis;
