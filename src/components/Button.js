import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Button({ name, onPress, size, color }) {

  const sizeConst = size ? size : 24
  const buttonColor = color ? color : "black"

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "grey" }}
      style={({ pressed }) => [
        styles.pressable,
        pressed ? styles.buttonPressed : null,
      ]}
    >
      <Icon name={name} size={sizeConst} color={buttonColor} />
    </Pressable>
  );
}

export default Button;

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
});
