import AmbulantMib from "../scores-mib/AmbulantMib";
import AmbulantSib from "../scores-sib/AmbulantSib";

const Ambulant = (tone) => {
  const sheetData = tone === "sib" ? AmbulantSib() : AmbulantMib();

  return {
    id: "ambulant",
    title: "L'ambulant",
    number: 6,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default Ambulant;