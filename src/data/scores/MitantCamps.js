import Vex from 'vexflow';

const MitantCamps = () => {
    // measure 1
    // notes
    let note1_m1 = new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }).addDotToAll()
    let note2_m1 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "8" }).setStemDirection(-1)

    // measure 2
    // notes
    let note1_m2 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "8" }).setStemDirection(-1)
    let note2_m2 = new Vex.Flow.StaveNote({ keys: ["f/5"], duration: "8" }).setStemDirection(-1)
    let note3_m2 = new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "8" }).addDotToAll()
    let note4_m2 = new Vex.Flow.StaveNote({ keys: ["c/5"], duration: "16" }).addAccidental(0, new Vex.Flow.Accidental("#"))

    // measure 3
    // notes
    let note1_m3 = new Vex.Flow.StaveNote({ keys: ["d/5"], duration: "2" }).setStemDirection(-1)
    
    // beams
    let beam1_m2 = new Vex.Flow.Beam([note1_m2, note2_m2]);
    let beam2_m2 = new Vex.Flow.Beam([note3_m2, note4_m2]);
    // ties
    

   return (
        {
            id: 'mitant-camps',
            title: 'Mitant des Camps',
            number: 26,
            clef: 'treble',
            keySignature: 'F',
            timeSignature: '2/4',
            measures: [
                {
                    index: 0,
                    notes: [note1_m1, note2_m1], 
                    weight: 4
                },
                {
                    index: 1,
                    notes: [note1_m2, note2_m2, note3_m2, note4_m2],
                    weight: 4
                },
                {
                    index: 2,
                    notes: [note1_m3],
                    weight: 4
                }
            ],
            beams: [beam1_m2, beam2_m2],
            ties: []
        }
    )
}

export default MitantCamps