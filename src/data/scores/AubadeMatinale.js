import AubadeMatinaleMib from "../scores-mib/AubadeMatinaleMib";
import AubadeMatinaleSib from "../scores-sib/AubadeMatinaleSib";

const AubadeMatinale = (tone) => {
  const sheetData = tone === "sib" ? AubadeMatinaleSib() : AubadeMatinaleMib();

  return {
    id: "aubade-matinale",
    title: "Aubade matinale",
    number: 26,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default AubadeMatinale;
