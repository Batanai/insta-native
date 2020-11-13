import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Stories from "../../components/stories/Stories";
import Posts from "../../posts-components/post/Posts";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stories />
      <Posts />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
