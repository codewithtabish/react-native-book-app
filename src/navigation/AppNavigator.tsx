// AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
// import SplashScreen from "../onboarding/SplashScreen";

const AppNavigator = ({ userToken }: { userToken: string | null }) => {
  // Determine if the user is authenticated
  const isAuthenticated = !!userToken;

  return (
    <NavigationContainer>
      <>
        <SignedIn>
          <MainNavigator />
        </SignedIn>
        <SignedOut>
          <AuthNavigator />
        </SignedOut>
      </>
      {/* {isAuthenticated ? <MainNavigator /> : <AuthNavigator />} */}
      {/* <SplashScreen /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
