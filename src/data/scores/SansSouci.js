import SansSouciMib from "../scores-mib/SansSouciMib";
import SansSouciSib from "../scores-sib/SansSouciSib";

const SansSouci = (tone) => {
  let sheetData = tone === "sib" ? SansSouciSib() : SansSouciMib();

  return {
    id: "sans-souci",
    title: "Sans souci",
    number: 4,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default SansSouci;
