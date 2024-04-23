import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemeProvider } from '@react-navigation/native';
import ThemedContainer from '../components/ThemedContainer';
import { images } from '../constants';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = () => {
  return (
    <ThemedContainer>
      <View className='flex-1 justify-center items-center'>
        <Image
          className='resize-cover  resize-contain'
          source={images.book}
          style={{
            width: responsiveScreenWidth(70),
            height: responsiveScreenHeight(35),
          }}
          resizeMode='contain'
        />
        <View className='mx-8'>
          <Text
            className='text-secondary-200 font-pbold '
            style={{
              fontSize: responsiveScreenFontSize(2.3),
            }}
          >
            Welcome to Book Haven - Your Gateway to a World of Stories"
          </Text>
          <Text className='text-white mt-3 text-center font-pextralight tracking-widest'>
            Where Every Page Holds the Promise of Adventure, Emotion, and
            Inspiration
          </Text>
        </View>
        <CustomButton title={'GET STARTED'} containerStyles={`w-[80%] mt-12`} />
      </View>
    </ThemedContainer>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
