import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Rating from "./Rating";
import { basePalette } from "../styles/colors";
import { Review } from "../constants/global";

interface IProps {
  item: Review;
}

const ReviewItem = ({ item }: IProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>ID: {item?.id}</Text>
      <Text style={styles.title}>Title: {item?.title}</Text>
      <Text style={styles.title}>Content: {item?.content}</Text>
      <Rating rating={item.rating} readOnly />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: basePalette.highlighted_background,
    padding: 20,
    marginHorizontal: 6,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: basePalette.border_color,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default memo(ReviewItem);
