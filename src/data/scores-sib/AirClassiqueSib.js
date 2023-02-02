import { StaveNote, Beam, Dot } from "vexflow";

const AirClassiqueSib = () => {
  // measure 1
  // notes
  let note1_m1 = new StaveNote({
    keys: ["f/4"],
    duration: "8",
  });
  let note2_m1 = new StaveNote({ keys: ["g/4"], duration: "16" });
  let note3_m1 = new StaveNote({ keys: ["a/4"], duration: "8" });
  let note4_m1 = new StaveNote({ keys: ["a/4"], duration: "8" });
  // beams
  let beam1_m1 = new Beam([note1_m1, note2_m1]);
  let beam2_m1 = new Beam([note3_m1, note4_m1]);

  // measure 2
  // notes
  let note1_m2 = new StaveNote({
    keys: ["f/4"],
    duration: "8",
  });
  let note2_m2 = new StaveNote({ keys: ["g/4"], duration: "16" });
  let note3_m2 = new StaveNote({ keys: ["a/4"], duration: "8" });
  let note4_m2 = new StaveNote({ keys: ["a/4"], duration: "8" });
  // beams
  let beam1_m2 = new Beam([note1_m2, note2_m2]);
  let beam2_m2 = new Beam([note3_m2, note4_m2]);

  Dot.buildAndAttach([note1_m1, note1_m2], { all: true });

  return {
    keySignature: "F",
    measures: [
      {
        index: 0,
        notes: [note1_m1, note2_m1, note3_m1, note4_m1],
        weight: 4,
      },
      {
        index: 1,
        notes: [note1_m2, note2_m2, note3_m2, note4_m2],
        weight: 4,
      },
    ],
    beams: [beam1_m1, beam2_m1, beam1_m2, beam2_m2],
    ties: [],
  };
};

export default AirClassiqueSib;
