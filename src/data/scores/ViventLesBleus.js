import ViventLesBleusMib from "../scores-mib/ViventLesBleusMib";
import ViventLesBleusSib from "../scores-sib/ViventLesBleusSib";

const ViventLesBleus = (tone) => {
  const sheetData = tone === "sib" ? ViventLesBleusSib() : ViventLesBleusMib();

  return {
    id: "vivent-les-bleus",
    title: "Vivent les Bleus",
    number: 7,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default ViventLesBleus;
