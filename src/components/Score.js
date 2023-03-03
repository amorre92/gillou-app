<<<<<<< HEAD
import React, {useState} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Vex from 'vexflow';
import ReactNativeSVGContext from '../vexflow/ReactNativeSVGContext';
import NotoFontPack from '../vexflow/NotoFontPack';
import { Barline } from 'vexflow/src/stavebarline';
import DoubleClick from 'react-native-double-tap';
import { Badge, ListItem, Text } from 'react-native-elements';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { Button } from 'react-native'

const pageWidth = Dimensions.get('window').width - 30
const keyWidth = 70
const zWidth = 20
//let state = false;


=======
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import DoubleClick from "react-native-double-tap";
import ScoreTitle from "./ScoreTitle";
import { useDispatch, useSelector } from "react-redux";
import { addToHistory, removeLastScoreFromHistory } from "../store/history";
import { Stave, Barline, Formatter } from "vexflow";
import VexCanvas from "react-native-vexflow-canvas";

const pageWidth = Dimensions.get("window").width - 10;
>>>>>>> master

const Score = (props) => {
  const tone = useSelector((state) => state.tone.value);
  const dispatch = useDispatch();
  const keyWidth =
    props.sheet.keySignature === "C"
      ? 50
      : props.sheet.keySignature === "D"
      ? 80
      : props.sheet.keySignature === "Bb" 
      ? 80
      : 70;

  const zWidth = tone === "sib" ? 20 : 20;

<<<<<<< HEAD
    const [
        defaultAnimationDialog, setDefaultAnimationDialog
      ] = useState(false);
      
    


    const addToHistoryHandler = () => {
        props.onAddToHistory(props.sheet.title, props.sheet.number, props.sheet.id);
        if(props.sheet.number == 19)
        {
            setDefaultAnimationDialog(true);
        }
    }
=======
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
>>>>>>> master

  const widths = calculateWidths(
    props.sheet.measures,
    pageWidth - keyWidth - zWidth
  );

  const draw = (ref) => {
    const context = ref.getContext(); // get the context from the canvas.
    context.clear(); // To have a clean canvas in every render.

    // create stave 0 - with key, signature, etc...
    renderStave0(
      keyWidth,
      props.sheet.clef,
      props.sheet.keySignature,
      props.sheet.timeSignature,
      context
    );

<<<<<<< HEAD
    let currentX = keyWidth
    

    props.sheet.measures.forEach((measure) => {
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
            <DoubleClick
                doubleTap={addToHistoryHandler}
                delay={200}>
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{props.sheet.number + ' - ' + props.sheet.title}</ListItem.Title>
                        <View>
                            {context.render()}
                        </View>
                    </ListItem.Content>
                </ListItem>
            </DoubleClick>
            <Badge
              status="primary"
              value={props.nbInHistory}
              containerStyle={{ position: 'absolute', top:16, left: pageWidth }}
              badgeStyle={getBadgeStyle(props.nbInHistory)}
              textStyle={getBadgeTextStyle(props.nbInHistory)}
            />
            <Dialog visible={defaultAnimationDialog}
                onTouchOutside={() => {
                    setDefaultAnimationDialog(false);
                  }}
                  
                >
                <DialogContent> 
                    <Text>Claudy arrête de déconner !</Text>
                </DialogContent>        
                    
            </Dialog>
        </View>
    );
}

const renderStave0 = (width, clef, keySignature, timeSignature, context) => {
    var staveMeasure0 = new Vex.Flow.Stave(0, 0, width, { right_bar: false })
    staveMeasure0.addClef(clef).addKeySignature(keySignature).addTimeSignature(timeSignature).setContext(context).draw()
    return staveMeasure0
}

const renderStave = (x, width, notes, context, first, last) => {
    let options = (first) ? { left_bar: false } : {}
    options = (last) ? { ...options, right_bar: false } : options
    var stave = new Vex.Flow.Stave(x, 0, width, options)
    stave.setContext(context).draw()
    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
    return stave
}

const renderStaveZ = (x, width, context) => {
    let staveMeasureZ = new Vex.Flow.Stave(x, 0, width, { right_bar: false, left_bar: false })
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

    let weights = 0
    measures.forEach((measure) => weights = weights + measure.weight)
    let notewidth = availableWidth / weights

    return measures.map((measure) => notewidth * measure.weight)
}

const getBadgeStyle = (nbInHistory) => {
    return ({
        backgroundColor: (badgeColors.length > nbInHistory) ? badgeColors[nbInHistory].code : "black"
    })
}

const getBadgeTextStyle = (nbInHistory) => {
    return ({
            color: (badgeColors.length > nbInHistory) ? badgeColors[nbInHistory].text : "white"
        }
    )
}

const styles = StyleSheet.create(
    {

=======
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
>>>>>>> master
    });

    renderStaveZ(currentX, zWidth, context);

    // Render beams
    renderBeams(props.sheet.beams, context);
    // Render ties
    renderTies(props.sheet.ties, context);
  };

  return (
    <View>
      <DoubleClick doubleTap={addToHistoryHandler} delay={10000}>
        <ScoreTitle
          title={props.sheet.number + " - " + props.sheet.title}
          onAddOneToHistory={addToHistoryHandler}
          onRemoveOneOfHistory={removeOneFromHistoryHandler}
          scoreId={props.id}
        />
        <View style={styles.scoreContainer}>
          <VexCanvas width={pageWidth} height={120} draw={draw} />
        </View>
      </DoubleClick>
    </View>
  );
};

const renderStave0 = (width, clef, keySignature, timeSignature, context) => {
  var staveMeasure0 = new Stave(0, 0, width, { right_bar: false });
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
  var stave = new Stave(x, 0, width, options);
  stave.setContext(context).draw();
  Formatter.FormatAndDraw(context, stave, notes, {align_rests: false});
  return stave;
};

const renderStaveZ = (x, width, context) => {
  let staveMeasureZ = new Stave(x, 0, width, {
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
