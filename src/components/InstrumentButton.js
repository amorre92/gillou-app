import { Pressable, StyleSheet, Image } from "react-native";
import { CLARINET, TRUMPET } from "../image"; 

function InstrumentButton({ tone, onPress, size }) {

  const sizeConst = size ? size : 24
  const source = (tone === "sib") ? TRUMPET : CLARINET
  const color = (tone === "sib") ? "#00C9A5" : "#9D8EFF"

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "grey" }}
      style={({ pressed }) => [
        styles.pressable,
        pressed ? styles.buttonPressed : null,
      ]}
    >
      <Image source={source} style={[styles.image, {tintColor: color}]}/>
    </Pressable>
  );
}

export default InstrumentButton;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.7,
  },
  pressable: {
    width: 40,
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden"
  },
  image: {
    width: 24,
    height: 24
  }
});