// AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
// import SplashScreen from "../onboarding/SplashScreen";

const AppNavigator = ({ userToken }: { userToken: string | null }) => {
  // Determine if the user is authenticated
  const isAuthenticated = !!userToken;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
      {/* <SplashScreen /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
