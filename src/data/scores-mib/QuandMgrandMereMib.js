import { StaveNote, Beam, Curve } from "vexflow";

const QuandMgrandMereMib = () => {
  // measure 1
  // notes
  let note1_m1 = new StaveNote({ keys: ["b/4"], duration: "qr" });
  let note2_m1 = new StaveNote({ keys: ["e/4"], duration: "8" });
  let note3_m1 = new StaveNote({ keys: ["d/4"], duration: "8" });
  // beams
  let beam1_m1 = new Beam([note2_m1, note3_m1]);
  // ties
  let tie1_m1 = new Curve(note2_m1, note3_m1, {
    y_shift: 10,
    x_shift: -5,
  });

  // measure 2
  // notes
  let note1_m2 = new StaveNote({ keys: ["e/4"], duration: "8" });
  let note2_m2 = new StaveNote({ keys: ["d/4"], duration: "8" });
  let note3_m2 = new StaveNote({ keys: ["e/4"], duration: "8" });
  let note4_m2 = new StaveNote({ keys: ["f/4"], duration: "8" });
  // beams
  let beam1_m2 = new Beam([note1_m2, note2_m2]);
  let beam2_m2 = new Beam([note3_m2, note4_m2]);
  // ties
  let tie1_m2 = new Curve(note1_m2, note2_m2, {
    y_shift: 10,
    x_shift: -5,
  });

  // measure 3
  // notes
  let note1_m3 = new StaveNote({
    keys: ["g/4"],
    duration: "q",
  });
  let note2_m3 = new StaveNote({ keys: ["b/4"], duration: "qr" });

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
        notes: [note1_m2, note2_m2, note3_m2, note4_m2],
        weight: 5,
      },
      {
        index: 2,
        notes: [note1_m3, note2_m3],
        weight: 3,
      },
    ],
    beams: [beam1_m1, beam1_m2, beam2_m2],
    ties: [tie1_m1, tie1_m2],
  };
};

export default QuandMgrandMereMib;
