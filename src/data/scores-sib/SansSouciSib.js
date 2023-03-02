import { StaveNote, Beam } from "vexflow";

const SansSouciSib = () => {
  // measure 1
  // notes
  let note1_m1 = new StaveNote({ keys: ["b/4"], duration: "qr" });
  let note2_m1 = new StaveNote({
    keys: ["c/5"],
    duration: "8",
  }).setStemDirection(-1);
  let note3_m1 = new StaveNote({
    keys: ["f/5"],
    duration: "8",
  }).setStemDirection(-1);
  // beams
  let beam1_m1 = new Beam([note2_m1, note3_m1]);

  // measure 2
  // notes
  let note1_m2 = new StaveNote({
    keys: ["a/5"],
    duration: "q",
  }).setStemDirection(-1);
  let note2_m2 = new StaveNote({
    keys: ["f/5"],
    duration: "8",
  }).setStemDirection(-1);
  let note3_m2 = new StaveNote({
    keys: ["f/5"],
    duration: "8",
  }).setStemDirection(-1);
  // beams
  let beam1_m2 = new Beam([note2_m2, note3_m2]);

  // measure 3
  // notes
  let note1_m3 = new StaveNote({
    keys: ["c/5"],
    duration: "q",
  }).setStemDirection(-1);
  let note2_m3 = new StaveNote({
    keys: ["b/4"],
    duration: "qr",
  }).setStemDirection(-1);

  return {
    keySignature: "F",
    measures: [
      {
        index: 0,
        notes: [note1_m1, note2_m1, note3_m1],
        weight: 3,
      },
      {
        index: 1,
        notes: [note1_m2, note2_m2, note3_m2],
        weight: 3,
      },
      {
        index: 2,
        notes: [note1_m3, note2_m3],
        weight: 2.5,
      },
    ],
    beams: [beam1_m1, beam1_m2],
    ties: [],
  };
};

export default SansSouciSib;
