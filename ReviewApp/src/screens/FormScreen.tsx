import React, { memo, useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from "react-native";
import Rating from "../components/Rating";
import FormTextItem from "../components/FormTextItem";
import { Form } from "../constants/global";
import Button from "../components/Button";
import { basePalette } from "../styles/colors";
import useForm from "../hooks/useForm";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStack = {
  Form: undefined;
  ReviewDisplay: undefined;
};

interface IProps {
  onFormSubmit: (form: Form) => void;
  navigation: StackNavigationProp<RootStack>;
}

const FormScreen = ({ onFormSubmit, navigation }: IProps) => {
  const {
    title,
    content,
    rating,
    handleTitleChange,
    handleContentChange,
    handleRatingChange,
    resetForm,
    validateForm,
  } = useForm();
  const [activityIndicator, setActivityIndicator] = useState<boolean>(false);

  const onPressSeeReviews = useCallback(
    () => navigation.navigate("ReviewDisplay"),
    [navigation]
  );

  const displayAlert = (title: string) => {
    Alert.alert(title);
  };

  const submitForm = async (): Promise<void> => {
    const validForm = validateForm();
    try {
      if (validForm) {
        setActivityIndicator(true);
        await onFormSubmit({ title, content, rating });
        resetForm();
        displayAlert("Thank you for your review!");
      } else {
        displayAlert("Please fill out missing fields");
      }
    } catch (err) {
      displayAlert(`Error submitting form ${err}`);
    } finally {
      setActivityIndicator(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Button
          onPress={onPressSeeReviews}
          title="See reviews"
          containerStyle={styles.buttonContainer}
        />
        <View style={styles.formContainer}>
          <View style={styles.bodyContainer}>
            {activityIndicator && (
              <ActivityIndicator
                size="large"
                color={basePalette.button_background}
                style={styles.loading}
              />
            )}
            <FormTextItem
              itemTitle={"Title:"}
              text={title}
              onChangeText={handleTitleChange}
              containerStyle={styles.titleContainer}
            />
            <FormTextItem
              itemTitle={"Content:"}
              text={content}
              onChangeText={handleContentChange}
              containerStyle={styles.contentContainer}
            />
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>Rating:</Text>
              <Rating rating={rating} onPress={handleRatingChange} />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={submitForm} title="Submit Form"></Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  formContainer: {
    flex: 1,
    margin: 10,
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
    backgroundColor: basePalette.highlighted_background,
    borderRadius: 10,
  },
  bodyContainer: {
    flex: 1,
  },
  buttonContainer: {
    padding: 10,
  },
  titleContainer: {
    flex: 0.2,
  },
  contentContainer: {
    flex: 0.45,
  },
  ratingText: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(FormScreen);
