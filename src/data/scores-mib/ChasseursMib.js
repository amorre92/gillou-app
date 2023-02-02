import { StaveNote, Curve, Dot, Beam } from "vexflow";

const ChasseursMib = () => {
  // measure 1
  // notes
  let note1_m1 = new StaveNote({
    keys: ["b/4"],
    duration: "qr",
  });
  let note2_m1 = new StaveNote({ keys: ["g/4"], duration: "8" });

  // measure 2
  // notes
  let note1_m2 = new StaveNote({
    keys: ["c/5"],
    duration: "8",
  });
  let note2_m2 = new StaveNote({
    keys: ["e/4"],
    duration: "16",
  });
  let note3_m2 = new StaveNote({
    keys: ["f/4"],
    duration: "16",
  });
  let note4_m2 = new StaveNote({
    keys: ["g/4"],
    duration: "8",
  });
  let note5_m2 = new StaveNote({
    keys: ["c/4"],
    duration: "8",
  });
  // beams
  let beam1_m2 = new Beam([note1_m2, note2_m2, note3_m2]);
  let beam2_m2 = new Beam([note4_m2, note5_m2]);
  // ties
  let tie1_m2 = new Curve(note2_m2, note4_m2);

  // measure 3
  // notes
  let note1_m3 = new StaveNote({ keys: ["b/3"], duration: "16" });
  let note2_m3 = new StaveNote({ keys: ["c/4"], duration: "16" });
  let note3_m3 = new StaveNote({ keys: ["d/4"], duration: "16" });
  let note4_m3 = new StaveNote({ keys: ["e/4"], duration: "16" });
  let note5_m3 = new StaveNote({ keys: ["f/4"], duration: "8" });
  let note6_m3 = new StaveNote({ keys: ["b/4"], duration: "8r" });
  // beams
  let beam1_m3 = new Beam([note1_m3, note2_m3, note3_m3, note4_m3]);
  // ties
  let tie1_m3 = new Curve(note1_m3, note4_m3);

  Dot.buildAndAttach([note1_m1], { all: true });

  return {
    keySignature: "C",
    measures: [
      {
        index: 0,
        notes: [note1_m1, note2_m1],
        weight: 4,
      },
      {
        index: 1,
        notes: [note1_m2, note2_m2, note3_m2, note4_m2, note5_m2],
        weight: 5,
      },
      {
        index: 2,
        notes: [note1_m3, note2_m3, note3_m3, note4_m3, note5_m3, note6_m3],
        weight: 6,
      },
    ],
    beams: [beam1_m2, beam2_m2, beam1_m3],
    ties: [tie1_m2, tie1_m3],
  };
};

export default ChasseursMib;
