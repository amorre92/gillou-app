import { useEffect } from "react";
import { useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { SECONDARY } from "../constant/Colors";
import { updateOrder } from "../store/score";

function OrderScoreListScreen({ navigation }) {
  const scoreOrder = useSelector((state) => state.score.order);
  const [scoreOrderTemp, setScoreOrderTemp] = useState(scoreOrder);
  const dispatch = useDispatch();

  const updateScoreOrderHandler = () => {
    dispatch(updateOrder({ scoreOrder: scoreOrderTemp }));
  };

  useEffect(() => {
    setScoreOrderTemp(scoreOrder)
  }, [scoreOrder])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.headerRightContainer}>
            {scoreOrderTemp !== scoreOrder && (
              <Button onPress={updateScoreOrderHandler} name="content-save" />
            )}
          </View>
        );
      },
    });
  }, [navigation, updateScoreOrderHandler]);

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            { backgroundColor: isActive ? SECONDARY : "white" },
          ]}
        >
          <Text style={styles.text}>{item.number + " - " + item.title}</Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DraggableFlatList
        data={scoreOrderTemp}
        onDragEnd={({ data }) => setScoreOrderTemp(data)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

export default OrderScoreListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowItem: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
  headerRightContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
  },
});
