import Vex from "vexflow";

const ViventLesBleusSib = () => {
  // measure 1
  // notes
  let note1_m1 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "8",
  }).setStemDirection(-1);
  let note2_m1 = new Vex.Flow.StaveNote({
    keys: ["c/5"],
    duration: "8",
  }).setStemDirection(-1);
  let note3_m1 = new Vex.Flow.StaveNote({
    keys: ["b/4"],
    duration: "8",
  }).setStemDirection(-1);
  let note4_m1 = new Vex.Flow.StaveNote({
    keys: ["d/5"],
    duration: "8",
  }).setStemDirection(-1);
  // beams
  let beam1_m1 = new Vex.Flow.Beam([note1_m1, note2_m1]);
  let beam2_m1 = new Vex.Flow.Beam([note3_m1, note4_m1]);
  // ties
  let tie1_m1 = new Vex.Flow.StaveTie({
    first_note: note1_m1,
    last_note: note2_m1,
    first_indices: [0],
    last_indices: [0],
  });
  let tie2_m1 = new Vex.Flow.StaveTie({
    first_note: note3_m1,
    last_note: note4_m1,
    first_indices: [0],
    last_indices: [0],
  });

  // measure 2
  // notes
  let note1_m2 = new Vex.Flow.StaveNote({
    keys: ["c/5"],
    duration: "8",
  }).setStemDirection(-1);
  let note2_m2 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "8",
  }).setStemDirection(-1);
  let note3_m2 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "8" });
  let note4_m2 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "8r" });
  // beams
  let beam1_m2 = new Vex.Flow.Beam([note1_m2, note2_m2]);
  //ties
  let tie1_m2 = new Vex.Flow.StaveTie({
    first_note: note1_m2,
    last_note: note2_m2,
    first_indices: [0],
    last_indices: [0],
  });

  return {
    keySignature: "F",
    measures: [
      {
        index: 0,
        notes: [note1_m1, note2_m1, note3_m1, note4_m1],
        weight: 1,
      },
      {
        index: 1,
        notes: [note1_m2, note2_m2, note3_m2, note4_m2],
        weight: 1,
      },
    ],
    beams: [beam1_m1, beam2_m1, beam1_m2],
    ties: [tie1_m1, tie1_m2, tie2_m1],
  };
};

export default ViventLesBleusSib;
