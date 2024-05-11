import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Rating from "./Rating";
import { basePalette } from "../styles/colors";

interface IProps {
  title: string;
  content: string;
  rating: number;
  id: number;
}

const ReviewItem = ({ title, content, rating, id }: IProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>ID: {id}</Text>
      <Text style={styles.title}>Title: {title}</Text>
      <Text style={styles.title}>Content: {content}</Text>
      <Rating rating={rating} readOnly />
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
