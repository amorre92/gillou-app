import AirClassiqueMib from "../scores-mib/AirClassiqueMib";
import AirClassiqueSib from "../scores-sib/AirClassiqueSib";

const AirClassique = (tone) => {
  const sheetData = tone === "sib" ? AirClassiqueSib() : AirClassiqueMib();

  return {
    id: "air-classique",
    title: "Air classique",
    number: 1,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData
  };
};

export default AirClassique;
