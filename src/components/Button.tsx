import React, { memo } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { basePalette } from "../styles/colors";

interface IProps {
  onPress: () => void;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const Button = ({ onPress, title, buttonStyle, containerStyle }: IProps) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={title}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: basePalette.button_background,
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: basePalette.button_text,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default memo(Button);
