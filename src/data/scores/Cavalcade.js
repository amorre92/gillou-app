import CavalcadeMib from "../scores-mib/CavalcadeMib";
import CavalcadeSib from "../scores-sib/CavalcadeSib";

const Cavalcade = (tone) => {
  const sheetData = tone === "sib" ? CavalcadeSib() : CavalcadeMib();

  return {
    id: "cavalcade",
    title: "Cavalcade",
    number: 10,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default Cavalcade;
