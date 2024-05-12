import React, { memo, useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import useForm from "../hooks/useForm";
import { Form } from "../constants/model";
import Button from "../components/Button";
import { basePalette } from "../styles/colors";
import { formConfig } from "../config/config";
import { RootStack } from "../navigation/stacks/RootStack";

interface IProps {
  onFormSubmit: (form: Form) => void;
  navigation: StackNavigationProp<RootStack>;
}

const FormScreen = ({ onFormSubmit, navigation }: IProps) => {
  const { formData, resetForm, validateForm, generateFormComponent } =
    useForm(formConfig);
  const [activityIndicator, setActivityIndicator] = useState<boolean>(false);

  const onPressSeeReviews = useCallback(
    () => navigation.navigate("Reviews"),
    [navigation]
  );

  const displayAlert = (title: string) => {
    Alert.alert(title);
  };

  const submitForm = async (): Promise<void> => {
    try {
      const validForm = validateForm();
      if (validForm) {
        setActivityIndicator(true);
        const { title, content, rating } = formData as any;
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
        <View style={styles.formContainer} accessibilityLabel="Review Form">
          <ActivityIndicator
            size="large"
            color={basePalette.button_background}
            style={[styles.loading, { opacity: activityIndicator ? 1 : 0 }]}
          />
          {generateFormComponent()}
          <View style={[styles.buttonContainer, styles.buttonContainerBottom]}>
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
    flexGrow: 1,
    margin: 10,
    backgroundColor: basePalette.highlighted_background,
    borderRadius: 10,
  },
  buttonContainer: {
    padding: 10,
  },
  buttonContainerBottom: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: "100%",
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    zIndex: 5,
  },
});

export default memo(FormScreen);
