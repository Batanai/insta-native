import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={{ backgroundColor: "brown", height: 1500 }}>
      <Text
        style={{
          textAlign: "center",
          marginTop: 300,
          fontSize: 30,
          color: "white",
        }}
      >
        profile screen
      </Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
