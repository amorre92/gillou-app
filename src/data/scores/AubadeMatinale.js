import { AUBADE_MATINALE_ID } from "../ScoreIdentifiers";
import AubadeMatinaleMib from "../scores-mib/AubadeMatinaleMib";
import AubadeMatinaleSib from "../scores-sib/AubadeMatinaleSib";

const AubadeMatinale = (tone) => {
  const sheetData = tone === "sib" ? AubadeMatinaleSib() : AubadeMatinaleMib();

  return {
    ...AUBADE_MATINALE_ID,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default AubadeMatinale;
