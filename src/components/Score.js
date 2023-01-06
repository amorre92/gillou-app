import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Vex from "vexflow";
import ReactNativeSVGContext from "../vexflow/ReactNativeSVGContext";
import NotoFontPack from "../vexflow/NotoFontPack";
import { Barline } from "vexflow/src/stavebarline";
import DoubleClick from "react-native-double-tap";
import { Badge, Button, ListItem } from "react-native-elements";

const pageWidth = Dimensions.get("window").width - 30;
const keyWidth = 70;
const zWidth = 20;

const badgeColors = [
  {
    key: 0,
    code: "#FFFFFF",
    text: "#000000",
  },
  {
    key: 1,
    code: "#f0f0f0",
    text: "#000000",
  },
  {
    key: 2,
    code: "#ffffb2",
    text: "#000000",
  },
  {
    key: 3,
    code: "#fed976",
    text: "#000000",
  },
  {
    key: 4,
    code: "#fc861d",
    text: "#000000",
  },
  {
    key: 5,
    code: "#fc4e2a",
    text: "#FFFFFF",
  },
  {
    key: 6,
    code: "#e31a1c",
    text: "#FFFFFF",
  },
  {
    key: 7,
    code: "#b10026",
    text: "#FFFFFF",
  },
  {
    key: 8,
    code: "#780000",
    text: "#FFFFFF",
  },
];

const Score = (props) => {
  const addToHistoryHandler = () => {
    props.onAddToHistory(props.sheet.title, props.sheet.number, props.sheet.id);
  };

  const removeOneFromHistoryHandler = () => {
    props.onRemoveOneFromHistory(props.sheet.id);
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
      <DoubleClick doubleTap={addToHistoryHandler} delay={200}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>
              {props.sheet.number + " - " + props.sheet.title}
            </ListItem.Title>
            <View>{context.render()}</View>
          </ListItem.Content>
        </ListItem>
      </DoubleClick>
      <Button
        icon={{
          name: "minus",
          type: "font-awesome",
          size: 15,
          color: "#FC861D",
        }}
        containerStyle={{ position: "absolute", top: 10, left: pageWidth - 70 }}
        buttonStyle={{ backgroundColor: "white" }}
        onPress={removeOneFromHistoryHandler}
      />
      <Badge
        status="primary"
        value={props.nbInHistory}
        containerStyle={{ position: "absolute", top: 16, left: pageWidth - 30 }}
        badgeStyle={getBadgeStyle(props.nbInHistory)}
        textStyle={getBadgeTextStyle(props.nbInHistory)}
      />
      <Button
        icon={{
          name: "plus",
          type: "font-awesome",
          size: 15,
          color: "#FC861D",
        }}
        containerStyle={{ position: "absolute", top: 10, left: pageWidth - 10 }}
        buttonStyle={{ backgroundColor: "white" }}
        onPress={addToHistoryHandler}
      />
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

const getBadgeStyle = (nbInHistory) => {
  return {
    backgroundColor:
      badgeColors.length > nbInHistory
        ? badgeColors[nbInHistory].code
        : "black",
  };
};

const getBadgeTextStyle = (nbInHistory) => {
  return {
    color:
      badgeColors.length > nbInHistory
        ? badgeColors[nbInHistory].text
        : "white",
  };
};

const styles = StyleSheet.create({});

export default Score;
