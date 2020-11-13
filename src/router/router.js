import React from "react";

import HomeStackScreen from "./home.routes";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import PostingScreen from "../screens/PostingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const Router = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          return <Entypo name="home" size={25} color={"black"} />;
        }
        if (route.name === "Discovery") {
          return <Feather name="search" size={25} color={"black"} />;
        }
        if (route.name === "Post") {
          return <Feather name="plus-square" size={25} color={"black"} />;
        }
        if (route.name === "Notifications") {
          return <AntDesign name="hearto" size={25} color={"black"} />;
        }
        if (route.name === "Profile") {
          return (
            <MaterialIcons name="person-outline" size={25} color={"black"} />
          );
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      showLabel: false,
    }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={PostingScreen} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default Router;
