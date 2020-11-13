import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfilePicture from "../profilePicture/ProfilePicture";

const Story = ({ story: { imageUri, name } }) => {
  return (
    <View style={styles.story}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 10,
    paddingTop: -5,
  },
});
