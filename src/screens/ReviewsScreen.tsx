import React, { memo, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { Review } from "../constants/global";
import { StackNavigationProp } from "@react-navigation/stack";
import Button from "../components/Button";
import ReviewItem from "../components/ReviewItem";

type RootStack = {
  Form: undefined;
  ReviewDisplay: undefined;
};
interface IProps {
  data: Review[];
  navigation: StackNavigationProp<RootStack>;
}

const ReviewScreen = ({ data, navigation }: IProps) => {
  const onPressWriteReview = useCallback(
    () => navigation.navigate("Form"),
    [navigation]
  );

  const keyExtractor = useCallback(
    (item: Review): string => item.id.toString(),
    []
  );

  const renderItem = useCallback(({ item }: ListRenderItemInfo<Review>) => {
    return <ReviewItem item={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContain}>
        <Button onPress={onPressWriteReview} title="Write a review" />
      </View>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={4}
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
  buttonContain: {
    margin: 10,
  },
  notAvailableText: {
    fontSize: 18,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default memo(ReviewScreen);
