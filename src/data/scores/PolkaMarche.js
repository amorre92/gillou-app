import PolkaMarcheMib from "../scores-mib/PolkaMarcheMib";
import PolkaMarcheSib from "../scores-sib/PolkaMarcheSib";

const PolkaMarche = (tone) => {
  const sheetData = tone === "sib" ? PolkaMarcheSib() : PolkaMarcheMib();

  return {
    id: "polka-marche",
    title: "Polka marche",
    number: 25,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default PolkaMarche;
