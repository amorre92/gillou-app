import MitantDesCampsMib from "../scores-mib/MitantDesCampsMib";
import MitantDesCampsSib from "../scores-sib/MitantDesCampsSib";

const MitantDesCamps = (tone) => {
  const sheetData = tone === "sib" ? MitantDesCampsSib() : MitantDesCampsMib();

  return {
    id: "mitant-des-camps",
    title: "Mitant des Camps",
    number: 27,
    clef: "treble",
    timeSignature: "2/4",
    ...sheetData,
  };
};

export default MitantDesCamps;
