import React, { memo, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Button from "../components/Button";
import { Review } from "../constants/model";
import ReviewItem from "../components/ReviewItem";
import { RootStack } from "../navigation/stacks/RootStack";

interface IProps {
  data: Review[];
  navigation: StackNavigationProp<RootStack>;
}

const ReviewsScreen = ({ data, navigation }: IProps) => {
  const onPressWriteReview = useCallback(
    () => navigation.navigate("Form"),
    [navigation]
  );

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Review>) => {
    return (
      <ReviewItem
        id={item.id}
        content={item.content}
        rating={item.rating}
        title={item.title}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressWriteReview} title="Write a review" />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.notAvailableText}>No reviews available</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  buttonContainer: {
    margin: 10,
  },
  notAvailableText: {
    fontSize: 18,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default memo(ReviewsScreen);
