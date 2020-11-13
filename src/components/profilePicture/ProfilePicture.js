import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProfilePicture = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: uri }} />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: 65,
    borderRadius: 40,
    borderWidth: 3,
    margin: 10,
    borderColor: "#ae22e0",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
});
