import { StaveNote, Beam, StaveTie, Dot } from "vexflow";

const LionDeBelgiqueSib = () => {
  // measure 1
  // notes
  let note1_m1 = new StaveNote({ keys: ["b/4"], duration: "qr" });
  let note2_m1 = new StaveNote({
    keys: ["c/5"],
    duration: "8",
  }).setStemDirection(-1);

  // measure 2
  // notes
  let note1_m2 = new StaveNote({
    keys: ["f/5"],
    duration: "q",
  }).setStemDirection(-1);
  let note2_m2 = new StaveNote({
    keys: ["a/5"],
    duration: "q",
  }).setStemDirection(-1);

  // measure 3
  // notes
  let note1_m3 = new StaveNote({
    keys: ["g/5"],
    duration: "16",
  }).setStemDirection(-1);
  let note2_m3 = new StaveNote({
    keys: ["f/5"],
    duration: "16",
  }).setStemDirection(-1);
  let note3_m3 = new StaveNote({
    keys: ["e/5"],
    duration: "16",
  }).setStemDirection(-1);
  let note4_m3 = new StaveNote({
    keys: ["f/5"],
    duration: "16",
  }).setStemDirection(-1);
  let note5_m3 = new StaveNote({
    keys: ["g/5"],
    duration: "8",
  }).setStemDirection(-1);
  let note6_m3 = new StaveNote({ keys: ["b/4"], duration: "8r" });
  // beams
  let beam1_m3 = new Beam([note1_m3, note2_m3, note3_m3, note4_m3]);
  // ties
  let tie1_m3 = new StaveTie({
    first_note: note1_m3,
    last_note: note5_m3,
  });

  Dot.buildAndAttach([note1_m1], { all: true });

  return {
    keySignature: "F",
    measures: [
      {
        index: 0,
        notes: [note1_m1, note2_m1],
        weight: 4,
      },
      {
        index: 1,
        notes: [note1_m2, note2_m2],
        weight: 3,
      },
      {
        index: 2,
        notes: [note1_m3, note2_m3, note3_m3, note4_m3, note5_m3, note6_m3],
        weight: 6,
      },
    ],
    beams: [beam1_m3],
    ties: [tie1_m3],
  };
};

export default LionDeBelgiqueSib;
