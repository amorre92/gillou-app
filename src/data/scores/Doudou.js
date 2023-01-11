import Vex from 'vexflow';

const Doudou = () => {

    // measure 1
    // notes
    let note1_m1 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }).addDotToAll()
    let note2_m1 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" })
    let note3_m1 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "8" }).setStemDirection(-1)

    // measure 2
    // notes
    let note1_m2 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "q" }).setStemDirection(-1)
    let note2_m2 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "8" }).setStemDirection(-1)
    let note3_m2 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "q" }).setStemDirection(-1)
    let note4_m2 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "8" })

    // measure 3
    // notes
    let note1_m3 = new Vex.Flow.StaveNote({ keys: ["a/4"], duration: "q" })
    let note2_m3 = new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "8" })
    let note3_m3 = new Vex.Flow.StaveNote({ keys: ["f/4"], duration: "q" })
    let note4_m3 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "8r" })

   return (
        {
            id: 'doudou',
            title: 'El doudou',
            number: 19,
            clef: 'treble',
            keySignature: 'F',
            timeSignature: '6/8',
            measures: [
                {
                    index: 0,
                    notes: [note1_m1, note2_m1, note3_m1], 
                    weight: 3
                },
                {
                    index: 1,
                    notes: [note1_m2, note2_m2, note3_m2, note4_m2],
                    weight: 4
                },
                {
                    index: 2,
                    notes: [note1_m3, note2_m3, note3_m3, note4_m3],
                    weight: 4
                }
            ],
            beams: [],
            ties: []
        }
    )
}

export default Doudou