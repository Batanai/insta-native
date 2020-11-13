import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Footer = ({ caption, postedAt, likesCount: likesCountProp, name }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconRight}>
        <View style={styles.icons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <AntDesign
                name="heart"
                size={25}
                style={styles.icon}
                color={"#d42424"}
              />
            ) : (
              <AntDesign
                name="hearto"
                size={25}
                style={styles.icon}
                color={"#9c9c9c"}
              />
            )}
          </TouchableWithoutFeedback>
          <Fontisto
            name="comment"
            size={25}
            style={styles.icon}
            color={"#9c9c9c"}
          />
          <Fontisto
            name="paper-plane"
            size={25}
            style={styles.icon}
            color={"#9c9c9c"}
          />
        </View>
        <FontAwesome
          name="bookmark-o"
          size={25}
          style={styles.icon}
          color={"#9c9c9c"}
        />
      </View>
      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text>
        <Text style={styles.likes}>{name}</Text> {caption}
      </Text>
      <Text style={styles.postedAt}>Posted {postedAt}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    margin: 7,
  },
  likes: {
    fontWeight: "bold",
    margin: 3,
  },
  postedAt: {
    color: "#8a8987",
    margin: 3,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    paddingRight: 15,
  },
  iconRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
