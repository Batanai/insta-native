import React from "react";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import Post from "./Post";

const Posts = () => {
  const post = [
    {
      user: {
        name: "Pog6",
        imageUri:
          "https://www.plustvafrica.com/wp-content/uploads/drogba-to-leave-old-trafford-for-new-adventures.jpg",
      },
      postPic:
        "https://staticg.sportskeeda.com/editor/2020/11/e03a3-16051680899943-800.jpg",
      caption: "Not our day boys but we keep marching on",
      likesCount: 340,
      postedAt: "8 hours ago",
    },
    {
      user: {
        name: "Bruno10",
        imageUri:
          "https://upload.wikimedia.org/wikipedia/commons/e/ee/Bruno_Fernandes_Portugal%2C_2018.jpg",
      },
      postPic: "https://manutdtimes.com/wp-content/uploads/2020/03/f-18.jpg",
      caption: "Amazing win and great team work #GGMU",
      likesCount: 102,
      postedAt: "3 days ago",
    },
    {
      user: {
        name: "Hendo",
        imageUri:
          "https://img.bleacherreport.net/img/images/photos/003/833/178/hi-res-2d1106be39e412767cd7fe39093c5ed5_crop_north.jpg?1571159256&w=3072&h=2048",
      },
      postPic:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/29/18/community-shield.jpg",
      caption: "We cant win another title shooting like this SMH!!",
      likesCount: 3,
      postedAt: "3 days ago",
    },
    {
      user: {
        name: "Lacazette",
        imageUri:
          "https://sempreinter.com/wp-content/uploads/2020/05/lacazette-5-scaled-e1590778425174.jpg",
      },
      postPic:
        "https://static.independent.co.uk/2020/11/08/21/GettyImages-1229539632.jpg?width=982&height=726",
      caption: "We bottled it again, The gooners at it again",
      likesCount: 12,
      postedAt: "4 days ago",
    },
  ];
  return (
    <FlatList data={post} renderItem={({ item }) => <Post post={item} />} />
  );
};

export default Posts;

const styles = StyleSheet.create({});
