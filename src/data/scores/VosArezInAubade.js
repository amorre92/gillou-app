import VosArezInAubadeMib from "../scores-mib/VosArezInAubadeMib";
import VosArezInAubadeSib from "../scores-sib/VosArezInAubadeSib";

const VosArezInAubade = (tone) => {
  const sheetData =
    tone === "sib" ? VosArezInAubadeSib() : VosArezInAubadeMib();

  return {
    id: "vos-arez-in-aubade",
    title: "Vos arez in aubade",
    number: 16,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default VosArezInAubade;
