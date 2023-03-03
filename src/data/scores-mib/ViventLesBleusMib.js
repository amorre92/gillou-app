import { StaveNote, StaveTie, Beam } from "vexflow";

const ViventLesBleusMib = () => {
  // measure 1
  // notes
  let note1_m1 = new StaveNote({
    keys: ["e/4"],
    duration: "8",
  });
  let note2_m1 = new StaveNote({
    keys: ["g/4"],
    duration: "8",
  });
  let note3_m1 = new StaveNote({
    keys: ["f/4"],
    duration: "8",
  });
  let note4_m1 = new StaveNote({
    keys: ["a/4"],
    duration: "8",
  });
  // beams
  let beam1_m1 = new Beam([note1_m1, note2_m1]);
  let beam2_m1 = new Beam([note3_m1, note4_m1]);
  // ties
  let tie1_m1 = new StaveTie({
    first_note: note1_m1,
    last_note: note2_m1,
  });
  let tie2_m1 = new StaveTie({
    first_note: note3_m1,
    last_note: note4_m1,
  });

  // measure 2
  // notes
  let note1_m2 = new StaveNote({
    keys: ["g/4"],
    duration: "8",
  });
  let note2_m2 = new StaveNote({
    keys: ["e/4"],
    duration: "8",
  });
  let note3_m2 = new StaveNote({ keys: ["e/4"], duration: "8" });
  let note4_m2 = new StaveNote({ keys: ["b/4"], duration: "8r" });
  // beams
  let beam1_m2 = new Beam([note1_m2, note2_m2]);
  //ties
  let tie1_m2 = new StaveTie({
    first_note: note1_m2,
    last_note: note2_m2,
  });

  return {
    keySignature: "C",
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

export default ViventLesBleusMib;
