import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { useDispatch, useSelector } from "react-redux";
import { SECONDARY } from "../constant/Colors";
import { updateOrder } from "../store/score";

function OrderScoreListScreen() {
  const scoreOrder = useSelector((state) => state.score.order);
  const dispatch = useDispatch();

  const updateScoreOrderHandler = (scoreOrder) => {
    dispatch(updateOrder({scoreOrder: scoreOrder}));
  };

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            { backgroundColor: isActive ? SECONDARY : 'white' },
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
        data={scoreOrder}
        onDragEnd={({ data }) => updateScoreOrderHandler(data)}
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
});
