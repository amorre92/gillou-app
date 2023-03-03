import ChasseursMib from "../scores-mib/ChasseursMib";
import ChasseursSib from "../scores-sib/ChasseursSib";

const Chasseurs = (tone) => {
  const sheetData = tone === "sib" ? ChasseursSib() : ChasseursMib();

  return {
    id: "chasseurs",
    title: "Les chasseurs",
    number: 21,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default Chasseurs;
