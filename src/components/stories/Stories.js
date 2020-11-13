import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Story from "../story/Story";

const Stories = () => {
  const stories = [
    {
      name: "Leo messi",
      imageUri:
        "https://www.gstatic.com/tv/thumb/persons/983712/983712_v9_ba.jpg",
    },
    {
      name: "CR7",
      imageUri:
        "https://tmssl.akamaized.net/images/portrait/originals/8198-1568120625.jpg",
    },
    {
      name: "Pog6",
      imageUri:
        "https://www.plustvafrica.com/wp-content/uploads/drogba-to-leave-old-trafford-for-new-adventures.jpg",
    },
    {
      name: "Neymar Jr",
      imageUri:
        "https://en.as.com/en/imagenes/2019/07/14/football/1563101845_323096_noticia_normal.jpg",
    },
    {
      name: "Mbape10",
      imageUri:
        "https://images.daznservices.com/di/library/GOAL/50/bd/kylian-mbappe-psg-paris-saint-germain-2018-19_19kh3r0nt8fs71oh2ep69tp63y.jpg?t=1726331736&quality=60&w=1200&h=800",
    },
    {
      name: "Rash10",
      imageUri:
        "https://www.24newshd.tv/uploads/facebook_post_images/2020-09-01/facebook_post_image_1598959027.jpg",
    },
    {
      name: "Martial9",
      imageUri:
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article17602478.ece/ALTERNATES/s615/0_GettyImages-1198855234.jpg",
    },
    {
      name: "AlexM",
      imageUri:
        "https://s.yimg.com/ny/api/res/1.2/7jUnH1gHs3eRreb7wsrIcQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-10/c0759ce0-f6ce-11e9-bfb3-def6ef2b627b",
    },
  ];
  return (
    <FlatList
      data={stories}
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Story story={item} />}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    height: 130,
  },
});
