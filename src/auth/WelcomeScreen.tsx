import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemeProvider } from '@react-navigation/native';
import ThemedContainer from '../components/ThemedContainer';
import { images } from '../constants';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const WelcomeScreen = () => {
  return (
    <ThemedContainer>
      <View className='flex-1'>
        <ImageBackground
          className='resize-cover'
          source={images.book}
          style={{
            width: responsiveScreenWidth(100),
            height: responsiveScreenHeight(100),
          }}
        ></ImageBackground>
      </View>
    </ThemedContainer>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
