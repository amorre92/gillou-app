import Vex from "vexflow";

const PolkaMarcheMib = () => {
  // measure 1
  // notes
  let note1_m1 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "16",
  });
  let note2_m1 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "16",
  });
  let note3_m1 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "8",
  });
  let note4_m1 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "8",
  });
  let note5_m1 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "8",
  });
  // beams
  let beam1_m1 = new Vex.Flow.Beam([note1_m1, note2_m1, note3_m1]);
  let beam2_m1 = new Vex.Flow.Beam([note4_m1, note5_m1]);

  // measure 2
  // notes
  let note1_m2 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "16",
  });
  let note2_m2 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "16",
  });
  let note3_m2 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "8",
  });
  let note4_m2 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "8",
  });
  let note5_m2 = new Vex.Flow.StaveNote({
    keys: ["a/4"],
    duration: "8",
  });
  // beams
  let beam1_m2 = new Vex.Flow.Beam([note1_m2, note2_m2, note3_m2]);
  let beam2_m2 = new Vex.Flow.Beam([note4_m2, note5_m2]);

  return {
    keySignature: "D",
    measures: [
      {
        index: 0,
        notes: [note1_m1, note2_m1, note3_m1, note4_m1, note5_m1],
        weight: 4,
      },
      {
        index: 1,
        notes: [note1_m2, note2_m2, note3_m2, note4_m2, note5_m2],
        weight: 4,
      },
    ],
    beams: [beam1_m1, beam2_m1, beam1_m2, beam2_m2],
    ties: [],
  };
};

export default PolkaMarcheMib;
