import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Vex from 'vexflow';
import { Accidental } from 'vexflow/src/accidental';
import { Stave } from 'vexflow/src/stave';
import { StaveNote } from 'vexflow/src/stavenote';
import { Voice } from 'vexflow/src/voice';
import { Formatter } from 'vexflow/src/formatter';
import ReactNativeSVGContext from '../vexflow/ReactNativeSVGContext';
import NotoFontPack from '../vexflow/NotoFontPack';
import { Barline } from 'vexflow/src/stavebarline';

const pageWidth = 350
const keyWidth = 80
const zWidth = 20

const Score = props => {

    // create context
    const context = new ReactNativeSVGContext(NotoFontPack, { width: pageWidth, height: 120 });

    const widths = calculateWidths(props.sheet.measures, pageWidth - keyWidth - zWidth)
    console.log(widths)

    // create stave 0 - with key, signature, etc...
    renderStave0(keyWidth, props.sheet.clef, props.sheet.keySignature, props.sheet.timeSignature, context)

    let currentX = keyWidth

    props.sheet.measures.forEach((measure) => {
        console.log(measure.index)
        renderStave(currentX,
            widths[measure.index],
            measure.notes,
            context,
            (measure.index == 0),
            ((measure.index + 1) == props.sheet.measures.length))
        currentX = currentX + widths[measure.index]
    })

    renderStaveZ(currentX, zWidth, context)

    // Render beams
    renderBeams(props.sheet.beams, context)
    // Render ties
    renderTies(props.sheet.ties, context)

    return (
        <View>
            <View>
                <Text>{props.sheet.number + ' ' + props.sheet.title}</Text>
            </View>
            <View>{context.render()}</View>
        </View>
    );
}

const renderStave0 = (width, clef, keySignature, timeSignature, context) => {
    var staveMeasure0 = new Vex.Flow.Stave(0, 0, width, { right_bar: false })
    staveMeasure0.addClef(clef).addKeySignature(keySignature).addTimeSignature(timeSignature).setContext(context).draw()
    return staveMeasure0
}

const renderStave = (x, width, notes, context, first, last) => {
    console.log(last)
    let options = (first) ? { left_bar: false } : {}
    options = (last) ? {...options, right_bar: false} : options
    var stave = new Vex.Flow.Stave(x, 0, width, options)
    stave.setContext(context).draw()
    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
    return stave
}

const renderStaveZ = (x, width, context) => {
    let staveMeasureZ = new Vex.Flow.Stave(x, 0, width, {right_bar: false, left_bar: false})
    staveMeasureZ.addEndModifier(new Barline(Barline.type.END)).setContext(context).draw()
    return staveMeasureZ
}

const renderBeams = (beams, context) => {
    beams.forEach((beam) => beam.setContext(context).draw())
}

const renderTies = (ties, context) => {
    ties.forEach((tie) => tie.setContext(context).draw())
}

const calculateWidths = (measures, availableWidth) => {

    let nbNotes = 0
    let weights = 0
    measures.forEach((measure) => weights = weights + measure.weight)
    let notewidth = availableWidth / weights    

    return measures.map((measure) => notewidth*measure.weight)
}


const styles = StyleSheet.create({
});

export default Score;