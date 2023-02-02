import { StaveNote, Beam, StaveTie, Accidental } from "vexflow";

const DginsDeLesteneMib = () => {
  // measure 1
  // notes
  let note1_m1 = new StaveNote({ keys: ["b/4"], duration: "8r" });
  let note2_m1 = new StaveNote({ keys: ["g/4"], duration: "16" });
  let note3_m1 = new StaveNote({ keys: ["a/4"], duration: "16" });
  let note4_m1 = new StaveNote({ keys: ["g/4"], duration: "8" });
  let note5_m1 = new StaveNote({
    keys: ["f/4"],
    duration: "8",
  }).addModifier(new Accidental("#"));
  let note6_m1 = new StaveNote({ keys: ["g/4"], duration: "8" });
  // beams
  let beam1_m1 = new Beam([note2_m1, note3_m1]);
  let beam2_m1 = new Beam([note4_m1, note5_m1, note6_m1]);
  // ties
  let tie1_m1 = new StaveTie({
    first_note: note2_m1,
    last_note: note4_m1,
  });

  // measure 2
  // notes
  let note1_m2 = new StaveNote({
    keys: ["c/5"],
    duration: "q",
  }).setStemDirection(-1);
  let note2_m2 = new StaveNote({ keys: ["b/4"], duration: "qr" });
  let note3_m2 = new StaveNote({ keys: ["b/4"], duration: "qr" });

  return {
    keySignature: "C",
    measures: [
      {
        index: 0,
        notes: [note1_m1, note2_m1, note3_m1, note4_m1, note5_m1, note6_m1],
        weight: 6,
      },
      {
        index: 1,
        notes: [note1_m2, note2_m2, note3_m2],
        weight: 3,
      },
    ],
    beams: [beam1_m1, beam2_m1],
    ties: [tie1_m1],
  };
};

export default DginsDeLesteneMib;
