import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Button({ name, onPress, size, color, disabled }) {

  const sizeConst = size ? size : 24
  const buttonColor = color ? color : "black"

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      android_ripple={{ color: "grey" }}
      style={({ pressed }) => [
        styles.pressable,
        pressed ? styles.buttonPressed : null
      ]}
    >
      <Icon name={name} size={sizeConst} color={disabled ? "#e0e0e0" : buttonColor} />
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
  }
});
