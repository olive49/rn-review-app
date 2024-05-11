import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ReviewScreen from "./src/screens/ReviewsScreen";
import { mockReviews } from "./src/constants/mockReviews";
import FormScreen from "./src/screens/FormScreen";
import apiService from "./src/services/ApiService";
import { Review, Form } from "./src/constants/global";
import { basePalette } from "./src/styles/colors";

const Stack = createStackNavigator();

export default function App() {
  const [updatedReviews, setUpdatedReviews] = useState<Review[]>(mockReviews);

  const getUpdatedList = async (): Promise<void> => {
    try {
      const newReviews: Review[] = await apiService.getReviews();
      setUpdatedReviews(newReviews);
    } catch (err) {
      // log the error, do not alert the user
      console.error(`Error fetching reviews: ${err}`);
    }
  };

  const onFormSubmit = async (form: Form): Promise<void> => {
    try {
      const updatedForm = { ...form, id: Math.random() };
      await apiService.postReviews(updatedForm);
      getUpdatedList();
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
          <Stack.Screen name="ReviewDisplay" options={{ headerShown: false }}>
            {(props) => <ReviewScreen {...props} data={updatedReviews} />}
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
    paddingVertical: 15,
  },
});
