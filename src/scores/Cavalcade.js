import Vex from 'vexflow';

const Cavalcade = () => {

    // measure 1
    // notes
    let note1_m1 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" })
    let note2_m1 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "8" }).addDotToAll().setStemDirection(-1)
    let note3_m1 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "16" }).setStemDirection(-1)
    // beams
    let beam1_m1 = new Vex.Flow.Beam([note2_m1, note3_m1])

    // measure 2
    // notes
    let note1_m2 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "8" }).addDotToAll()
    let note2_m2 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "16" })
    let note3_m2 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "16" })
    let note4_m2 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "8" })
    let note5_m2 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "8" })
    // beams
    let beam1_m2 = new Vex.Flow.Beam([note1_m2, note2_m2, note3_m2, note4_m2, note5_m2])

    // measure 3
    // notes
    let note1_m3 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "q" })
    let note2_m3 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" })

   return (
        {
            id: 'cavalcade',
            title: 'Cavalcade',
            number: 10,
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
                    notes: [note1_m2, note2_m2, note3_m2, note4_m2, note5_m2],
                    weight: 5
                },
                {
                    index: 2,
                    notes: [note1_m3, note2_m3],
                    weight: 2
                }
            ],
            beams: [beam1_m1, beam1_m2],
            ties: []
        }
    )
}

export default Cavalcade