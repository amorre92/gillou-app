import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Vex from "vexflow";
import ReactNativeSVGContext from "../vexflow/ReactNativeSVGContext";
import NotoFontPack from "../vexflow/NotoFontPack";
import { Barline } from "vexflow/src/stavebarline";
import DoubleClick from "react-native-double-tap";
import ScoreTitle from "./ScoreTitle";
import { useDispatch } from "react-redux";
import { addToHistory, removeLastScoreFromHistory } from "../store/history";

const pageWidth = Dimensions.get("window").width - 30;
const keyWidth = 70;
const zWidth = 20;

const Score = (props) => {
  const dispatch = useDispatch();

  const addToHistoryHandler = () => {
    dispatch(
      addToHistory({
        scoreTitle: props.sheet.title,
        scoreNumber: props.sheet.number,
        scoreId: props.sheet.id,
      })
    );
  };

  const removeOneFromHistoryHandler = () => {
    dispatch(removeLastScoreFromHistory({ scoreId: props.sheet.scoreId }));
  };

  // create context
  const context = new ReactNativeSVGContext(NotoFontPack, {
    width: pageWidth,
    height: 120,
  });

  const widths = calculateWidths(
    props.sheet.measures,
    pageWidth - keyWidth - zWidth
  );

  // create stave 0 - with key, signature, etc...
  renderStave0(
    keyWidth,
    props.sheet.clef,
    props.sheet.keySignature,
    props.sheet.timeSignature,
    context
  );

  let currentX = keyWidth;

  props.sheet.measures.forEach((measure) => {
    renderStave(
      currentX,
      widths[measure.index],
      measure.notes,
      context,
      measure.index == 0,
      measure.index + 1 == props.sheet.measures.length
    );
    currentX = currentX + widths[measure.index];
  });

  renderStaveZ(currentX, zWidth, context);

  // Render beams
  renderBeams(props.sheet.beams, context);
  // Render ties
  renderTies(props.sheet.ties, context);
  return (
    <View>
      <DoubleClick doubleTap={addToHistoryHandler} delay={10000}>
        <ScoreTitle
          title={props.sheet.number + " - " + props.sheet.title}
          onAddOneToHistory={addToHistoryHandler}
          onRemoveOneOfHistory={removeOneFromHistoryHandler}
          scoreId={props.id}
        />
        <View style={styles.scoreContainer}>{context.render()}</View>
      </DoubleClick>
    </View>
  );
};

const renderStave0 = (width, clef, keySignature, timeSignature, context) => {
  var staveMeasure0 = new Vex.Flow.Stave(0, 0, width, { right_bar: false });
  staveMeasure0
    .addClef(clef)
    .addKeySignature(keySignature)
    .addTimeSignature(timeSignature)
    .setContext(context)
    .draw();
  return staveMeasure0;
};

const renderStave = (x, width, notes, context, first, last) => {
  let options = first ? { left_bar: false } : {};
  options = last ? { ...options, right_bar: false } : options;
  var stave = new Vex.Flow.Stave(x, 0, width, options);
  stave.setContext(context).draw();
  Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
  return stave;
};

const renderStaveZ = (x, width, context) => {
  let staveMeasureZ = new Vex.Flow.Stave(x, 0, width, {
    right_bar: false,
    left_bar: false,
  });
  staveMeasureZ
    .addEndModifier(new Barline(Barline.type.END))
    .setContext(context)
    .draw();
  return staveMeasureZ;
};

const renderBeams = (beams, context) => {
  beams.forEach((beam) => beam.setContext(context).draw());
};

const renderTies = (ties, context) => {
  ties.forEach((tie) => tie.setContext(context).draw());
};

const calculateWidths = (measures, availableWidth) => {
  let weights = 0;
  measures.forEach((measure) => (weights = weights + measure.weight));
  let notewidth = availableWidth / weights;

  return measures.map((measure) => notewidth * measure.weight);
};

const styles = StyleSheet.create({
  scoreContainer: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
  },
});

export default Score;
