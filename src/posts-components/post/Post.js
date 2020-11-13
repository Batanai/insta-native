import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Post = ({ post: { user, postPic, caption, likesCount, postedAt } }) => {
  return (
    <View>
      <Header imageUri={user.imageUri} name={user.name} />
      <Body postPic={postPic} />
      <Footer
        name={user.name}
        caption={caption}
        likesCount={likesCount}
        postedAt={postedAt}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
