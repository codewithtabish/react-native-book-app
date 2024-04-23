// AuthNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../auth/SplashScreen";
import WelcomeScreen from "../auth/WelcomeScreen";
import OnBoardScreen from "../auth/OnBoardScreen";
import LoginScreen from "../auth/LoginScreen";
import NavigationNames from "./navigationStrings";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationNames.Auth.SplashScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={NavigationNames.Auth.SplashScreen}
        component={SplashScreen}
      />
      <Stack.Screen
        name={NavigationNames.Auth.WelcomeScreen}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name={NavigationNames.Auth.OnboardingScreen}
        component={OnBoardScreen}
      />
      <Stack.Screen
        name={NavigationNames.Auth.SignInScreen}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
