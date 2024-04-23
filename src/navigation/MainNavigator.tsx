// MainNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../main/HomeScreen";
import BookMark from "../main/BookMark";
import SearchScreen from "../main/SearchScreen";
import ProfileScreen from "../main/ProfileScreen";
import NavigationNames from "./navigationStrings";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavigationNames.Main.HomeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        name={NavigationNames.Main.BookmarkScreen}
        component={BookMark}
      />
      <Stack.Screen
        name={NavigationNames.Main.SearchScreen}
        component={SearchScreen}
      />
      <Stack.Screen
        name={NavigationNames.Main.ProfileScreen}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
