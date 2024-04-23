import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as MySplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ThemedContainer from '../components/ThemedContainer';
import { images } from '../constants';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

// Keep the splash screen visible while we fetch resourcesMy
MySplashScreen.preventAutoHideAsync();

const SplashScreen = ({ navigation }: any) => {
  const [fontsLoaded, error] = useFonts({
    'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
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

  useEffect(() => {
    if (fontsLoaded && !error) {
      setTimeout(() => {
        navigation.navigate('WelcomeScreen');
      }, 3000);
    }
  }, []);

  return (
    <ThemedContainer>
      <View className='flex-1 bg-primary justify-center items-center'>
        <Image
          source={images.logo}
          style={{
            width: responsiveScreenWidth(60),
            height: responsiveScreenHeight(7),
            margin: 'auto',
          }}
        />
        <View className='flex flex-col justify-center items-center  mt-10'>
          <Text
            className='text-secondary-100 font-bold '
            style={{ fontSize: responsiveScreenFontSize(2.5) }}
          >
            Discover the World of Books
          </Text>
          <Text
            className='max-w-[65%]  text-gray-200 font-pthin mt-4 italic'
            style={{ fontSize: responsiveScreenFontSize(1.9) }}
          >
            Explore a vast collection of literature, from timeless classics to
            modern masterpieces journey today
          </Text>
        </View>
      </View>
    </ThemedContainer>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
