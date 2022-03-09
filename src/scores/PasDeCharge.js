import Vex from 'vexflow';

const PasDeCharge = () => {

    // measure 1
    // notes
    let note1_m1 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }).addDotToAll()
    let note2_m1 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "16" }).setStemDirection(-1)
    let note3_m1 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "16" }).setStemDirection(-1)
    // beams
    let beam1_m1 = new Vex.Flow.Beam([note2_m1, note3_m1])

    // measure 2
    // notes
    let note1_m2 = new Vex.Flow.StaveNote({ keys: ["a/5"], duration: "8" }).addDotToAll().setStemDirection(-1)
    let note2_m2 = new Vex.Flow.StaveNote({ keys: ["g/5"], duration: "16" }).setStemDirection(-1)
    let note3_m2 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "16" }).setStemDirection(-1)
    let note4_m2 = new Vex.Flow.StaveNote({ keys: ["e/5"], duration: "16" }).setStemDirection(-1)
    let note5_m2 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "16" }).setStemDirection(-1)
    let note6_m2 = new Vex.Flow.StaveNote({ keys: ["a/5"], duration: "16" }).setStemDirection(-1)
    // beams
    let beam1_m2 = new Vex.Flow.Beam([note1_m2, note2_m2])
    let beam2_m2 = new Vex.Flow.Beam([note3_m2, note4_m2, note5_m2, note6_m2])
    // ties
    let tie1_m2 = new Vex.Flow.StaveTie({
        first_note: note3_m2,
        last_note: note4_m2
    })

    // measure 3
    // notes
    let note1_m3 = new Vex.Flow.StaveNote({ keys: ["g/5"], duration: "8" }).addDotToAll().setStemDirection(-1)
    let note2_m3 = new Vex.Flow.StaveNote({ keys: ["e/5"], duration: "16" }).setStemDirection(-1)
    let note3_m3 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "q" }).setStemDirection(-1)
    // beams
    let beam1_m3 = new Vex.Flow.Beam([note1_m3, note2_m3])

   return (
        {
            id: 'pas-de-charge',
            title: 'Pas de charge',
            number: 14,
            clef: 'treble',
            keySignature: 'F',
            timeSignature: '2/4',
            measures: [
                {
                    index: 0,
                    notes: [note1_m1, note2_m1, note3_m1], 
                    weight: 3
                },
                {
                    index: 1,
                    notes: [note1_m2, note2_m2, note3_m2, note4_m2, note5_m2, note6_m2],
                    weight: 6
                },
                {
                    index: 2,
                    notes: [note1_m3, note2_m3, note3_m3],
                    weight: 3
                }
            ],
            beams: [beam1_m1, beam1_m2, beam2_m2, beam1_m3],
            ties: [tie1_m2]
        }
    )
}

export default PasDeCharge