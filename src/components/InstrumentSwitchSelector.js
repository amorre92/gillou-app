import { CLARINET, TRUMPET } from "../image";
import { PRIMARY } from "../constant/Colors";
import { useDispatch, useSelector } from "react-redux";
import { switchTone } from "../store/tone";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function InstrumentSwitchSelector() {
  const tone = useSelector((state) => state.tone.value);
  const dispatch = useDispatch();

  function tonePressHandler() {
    dispatch(switchTone());
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={tonePressHandler}
        disable={tone !== "sib"}
        android_ripple={{ color: "grey" }}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.buttonPressed : null,
          { backgroundColor: tone === "sib" ? PRIMARY : "white" },
        ]}
      >
        <Text>Si b</Text>
        <Image
          source={TRUMPET}
          style={[styles.image, { tintColor: "black" }]}
        />
      </Pressable>
      <Pressable
        onPress={tonePressHandler}
        disable={tone !== "mib"}
        android_ripple={{ color: "grey" }}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.buttonPressed : null,
          { backgroundColor: tone === "mib" ? PRIMARY : "white" },
        ]}
      >
        <Text>Mi b</Text>
        <Image
          source={CLARINET}
          style={[styles.image, { tintColor: "black" }]}
        />
      </Pressable>
    </View>
  );
}

export default InstrumentSwitchSelector;

const styles = StyleSheet.create({
  container: {
    width: 200,
    flexDirection: "row",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  pressable: {
    width: 100,
    height: 30,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    flexDirection: "row",
  },
  image: {
    width: 24,
    height: 24,
  },
});
