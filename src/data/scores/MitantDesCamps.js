import { MITANT_DES_CAMPS_ID } from "../ScoreIdentifiers";
import MitantDesCampsMib from "../scores-mib/MitantDesCampsMib";
import MitantDesCampsSib from "../scores-sib/MitantDesCampsSib";

const MitantDesCamps = (tone) => {
  const sheetData = tone === "sib" ? MitantDesCampsSib() : MitantDesCampsMib();

  return {
    ...MITANT_DES_CAMPS_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default MitantDesCamps;
