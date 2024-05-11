import React, { memo } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  ViewStyle,
  StyleProp,
} from "react-native";
import { basePalette } from "../styles/colors";

interface IProps {
  itemTitle: string;
  text: string;
  onChangeText: (updatedValue: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const FormTextItem = ({
  itemTitle,
  text,
  onChangeText,
  containerStyle,
}: IProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{itemTitle}</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        multiline
        numberOfLines={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: basePalette.default_text,
    alignSelf: "center",
    marginBottom: 5,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: basePalette.border_color,
    borderRadius: 8,
    fontSize: 16,
  },
});

export default memo(FormTextItem);
