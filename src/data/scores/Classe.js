import Vex from 'vexflow';

const Classe = () => {
    // measure 1
    // notes
    let note1_m1 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "8" }).addDotToAll().setStemDirection(-1)
    let note2_m1 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "16" }).setStemDirection(-1)
    let note3_m1 = new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "8" }).addDotToAll().setStemDirection(-1)
    let note4_m1 = new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "16" }).setStemDirection(-1)
    // beams
    let beam1_m1 = new Vex.Flow.Beam([note1_m1, note2_m1]);
    let beam2_m1 = new Vex.Flow.Beam([note3_m1, note4_m1]);
    // ties
    let tie1_m1 = new Vex.Flow.StaveTie(
        {
            first_note: note2_m1,
            last_note: note3_m1
        }
    )

    // measure 2
    // notes
    let note1_m2 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "8" }).setStemDirection(-1)
    let note2_m2 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "8" }).setStemDirection(-1)
    let note3_m2 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "q" })
    // beams
    let beam1_m2 = new Vex.Flow.Beam([note1_m2, note2_m2]);
    // ties
    let tie1_m2 = new Vex.Flow.StaveTie(
        {
            first_note: note4_m1,
            last_note: note1_m2
        }
    )

    return (
        {
            id: 'classe',
            title: 'La classe',
            number: 12,
            clef: 'treble',
            keySignature: 'F',
            timeSignature: '2/4',
            measures: [
                {
                    index: 0,
                    notes: [note1_m1, note2_m1, note3_m1, note4_m1],
                    weight: 4
                },
                {
                    index: 1,
                    notes: [note1_m2, note2_m2, note3_m2],
                    weight: 3
                }
            ],
            beams: [beam1_m1, beam2_m1, beam1_m2],
            ties: [tie1_m1, tie1_m2]
        }
    )
}

export default Classe