import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const Header = ({ name, imageUri }) => {
  return (
    <View style={styles.dots}>
      <View style={styles.container}>
        <View style={styles.imageBorder}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Icon name="dots-three-vertical" size={15} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageBorder: {
    height: 45,
    width: 45,
    borderRadius: 40,
    borderWidth: 3,
    margin: 10,
    borderColor: "#ae22e0",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  name: {
    fontWeight: "bold",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },
});
