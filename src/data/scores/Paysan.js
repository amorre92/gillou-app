import Vex from 'vexflow';

const Paysan = () => {

    // measure 1
    // notes
    let note1_m1 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }).addDotToAll()
    let note2_m1 = new Vex.Flow.StaveNote({ keys: ["g/4"], duration: "8" })

    // measure 2
    // notes
    let note1_m2 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "8" })
    let note2_m2 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "8" })
    let note3_m2 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "q" }).setStemDirection(-1)
    // beams
    let beam1_m2 = new Vex.Flow.Beam([note1_m2, note2_m2])

    // measure 3
    // notes
    let note1_m3 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "q" })
    let note2_m3 = new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" })

   return (
        {
            id: 'paysan',
            title: 'Paysan s\'en va',
            number: 8,
            clef: 'treble',
            keySignature: 'F',
            timeSignature: '2/4',
            measures: [
                {
                    index: 0,
                    notes: [note1_m1, note2_m1], 
                    weight: 3
                },
                {
                    index: 1,
                    notes: [note1_m2, note2_m2, note3_m2],
                    weight: 3
                },
                {
                    index: 2,
                    notes: [note1_m3, note2_m3],
                    weight: 3
                }
            ],
            beams: [beam1_m2],
            ties: []
        }
    )
}

export default Paysan