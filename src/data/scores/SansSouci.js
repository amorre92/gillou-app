import { SANS_SOUCIS_ID } from "../ScoreIdentifiers";
import SansSouciMib from "../scores-mib/SansSouciMib";
import SansSouciSib from "../scores-sib/SansSouciSib";

const SansSouci = (tone) => {
  const sheetData = tone === "sib" ? SansSouciSib() : SansSouciMib();

  return {
    ...SANS_SOUCIS_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default SansSouci;
