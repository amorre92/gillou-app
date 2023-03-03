import { StaveNote, Curve, Beam, Dot } from "vexflow";

const PasDeChargeMib = () => {
  // measure 1
  // notes
  let note1_m1 = new StaveNote({
    keys: ["b/4"],
    duration: "qr",
  });
  let note2_m1 = new StaveNote({
    keys: ["g/4"],
    duration: "16",
  });
  let note3_m1 = new StaveNote({
    keys: ["c/5"],
    duration: "16",
  });
  // beams
  let beam1_m1 = new Beam([note2_m1, note3_m1]);

  // measure 2
  // notes
  let note1_m2 = new StaveNote({
    keys: ["e/5"],
    duration: "8",
  }).setStemDirection(-1);
  let note2_m2 = new StaveNote({
    keys: ["d/5"],
    duration: "16",
  }).setStemDirection(-1);
  let note3_m2 = new StaveNote({
    keys: ["c/5"],
    duration: "16",
  }).setStemDirection(-1);
  let note4_m2 = new StaveNote({
    keys: ["b/4"],
    duration: "16",
  }).setStemDirection(-1);
  let note5_m2 = new StaveNote({
    keys: ["c/5"],
    duration: "16",
  }).setStemDirection(-1);
  let note6_m2 = new StaveNote({
    keys: ["e/5"],
    duration: "16",
  }).setStemDirection(-1);
  // beams
  let beam1_m2 = new Beam([note1_m2, note2_m2]);
  let beam2_m2 = new Beam([note3_m2, note4_m2, note5_m2, note6_m2]);
  // ties
  let tie1_m2 = new Curve(note3_m2, note4_m2, {
    y_shift: 10,
    x_shift: -5,
  });

  // measure 3
  // notes
  let note1_m3 = new StaveNote({
    keys: ["d/5"],
    duration: "8",
  }).setStemDirection(-1);
  let note2_m3 = new StaveNote({
    keys: ["b/4"],
    duration: "16",
  }).setStemDirection(-1);
  let note3_m3 = new StaveNote({
    keys: ["g/4"],
    duration: "q",
  }).setStemDirection(-1);
  // beams
  let beam1_m3 = new Beam([note1_m3, note2_m3]);

  Dot.buildAndAttach([note1_m1, note1_m2, note1_m3], { all: true });

  return {
    keySignature: "C",
    measures: [
      {
        index: 0,
        notes: [note1_m1, note2_m1, note3_m1],
        weight: 3,
      },
      {
        index: 1,
        notes: [note1_m2, note2_m2, note3_m2, note4_m2, note5_m2, note6_m2],
        weight: 6,
      },
      {
        index: 2,
        notes: [note1_m3, note2_m3, note3_m3],
        weight: 3,
      },
    ],
    beams: [beam1_m1, beam1_m2, beam2_m2, beam1_m3],
    ties: [tie1_m2],
  };
};

export default PasDeChargeMib;
