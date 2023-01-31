import JuifErrantMib from "../scores-mib/JuifErrantMib";
import JuifErrantSib from "../scores-sib/JuifErrantSib";

const JuifErrant = (tone) => {
  const sheetData = tone === "sib" ? JuifErrantSib() : JuifErrantMib();

  return {
    id: "juif-errant",
    title: "Le juif errant",
    number: 11,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default JuifErrant;
