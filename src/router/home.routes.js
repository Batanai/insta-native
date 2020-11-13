import React from "react";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import Feather from "react-native-vector-icons/Feather";
import { createStackNavigator } from "@react-navigation/stack";
import Fontisto from "react-native-vector-icons/Fontisto";

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "InstaSoccer",
        headerLeftContainerStyle: { marginLeft: 15 },
        headerRightContainerStyle: { marginRight: 15 },
        headerLeft: () => <Feather name="camera" size={25} color={"black"} />,
        headerRight: () => (
          <Fontisto name="paper-plane" size={25} color={"black"} />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeRoutes;
