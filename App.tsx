import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ReviewsScreen from "./src/screens/ReviewsScreen";
import { mockReviews } from "./src/constants/mockReviews";
import FormScreen from "./src/screens/FormScreen";
import apiService from "./src/services/ApiService";
import { Review, Form } from "./src/constants/global";
import { basePalette } from "./src/styles/colors";

const Stack = createStackNavigator();

export default function App() {
  const [updatedReviews, setUpdatedReviews] = useState<Review[]>(mockReviews);
  const [newReview, setNewReview] = useState<boolean>(false);

  const getUpdatedList = async (): Promise<void> => {
    try {
      const newReviews: Review[] = await apiService.getReviews();
      setUpdatedReviews(newReviews);
    } catch (err) {
      // log the error, do not alert the user
      // in the future can have a retry mechanism
      console.error(`Error fetching reviews: ${err}`);
    } finally {
      setNewReview(false);
    }
  };

  useEffect(() => {
    if (newReview) {
      getUpdatedList();
    }
  }, [newReview]);

  const onFormSubmit = async (form: Form): Promise<void> => {
    try {
      const updatedForm = { ...form, id: Math.random() };
      await apiService.postReviews(updatedForm);
      setNewReview(true);
    } catch (err) {
      throw new Error(`Error submitting review: ${err}`);
    }
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Form">
          <Stack.Screen name="Form" options={{ headerShown: false }}>
            {(props) => <FormScreen {...props} onFormSubmit={onFormSubmit} />}
          </Stack.Screen>
          <Stack.Screen name="Reviews" options={{ headerShown: false }}>
            {(props) => <ReviewsScreen {...props} data={updatedReviews} />}
          </Stack.Screen>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: basePalette.main_background,
    paddingVertical: 20,
  },
});
