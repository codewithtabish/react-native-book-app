import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import * as MySplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import ThemedContainer from "../components/ThemedContainer";
import { images } from "../constants";

// Keep the splash screen visible while we fetch resourcesMy
MySplashScreen.preventAutoHideAsync();

const SplashScreen = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      MySplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <ThemedContainer>
      <View className="flex-1 bg-red-900 justify-center ">
        <Image source={images.logo} className="w-12 h-12" />
      </View>
    </ThemedContainer>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
