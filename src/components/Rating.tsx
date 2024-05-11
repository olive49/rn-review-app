import React, { memo } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { RATING_LENGTH } from "../constants/global";
import { basePalette } from "../styles/colors";

interface IProps {
  rating: number;
  readOnly?: boolean;
  onPress?: (i: number) => void;
}

const Rating = ({ rating, readOnly = false, onPress = () => {} }: IProps) => {
  const { rating_selected, rating_unselected } = basePalette;
  const getBackgroundColor = (i: number) => {
    return i + 1 <= rating ? rating_selected : rating_unselected;
  };

  const circles = Array.from({ length: RATING_LENGTH }, (_, i) => (
    <Pressable
      key={i}
      accessible={!readOnly && true}
      accessibilityRole={readOnly ? "none" : "radio"}
      accessibilityState={{ selected: i < rating }}
      accessibilityLabel={!readOnly ? `Rate ${i + 1}` : ""}
      disabled={readOnly}
      onPress={() => onPress(i + 1)}
      style={[
        styles.circleContainer,
        { backgroundColor: getBackgroundColor(i) },
      ]}
    />
  ));

  return <View style={styles.container}>{circles}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  circleContainer: {
    width: 25,
    height: 25,
    borderRadius: 50,
    margin: 4,
  },
});

export default memo(Rating);
