import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Rating from "./Rating";
import FormTextItem from "./FormTextItem";
import { FormFieldProps, FormFieldType } from "./../hooks/model";

const FormField = ({ label, value, onChange, type }: FormFieldProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === FormFieldType.TEXT && (
        <FormTextItem
          itemTitle={label}
          text={value}
          onChangeText={(text) => onChange(text)}
        />
      )}
      {type === FormFieldType.RATING && (
        <View style={styles.ratingContainer}>
          <Rating rating={value} onPress={(rating) => onChange(rating)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 0.2,
    paddingHorizontal: 5,
  },
  label: {
    marginBottom: 5,
    fontSize: 18,
    alignSelf: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(FormField);
