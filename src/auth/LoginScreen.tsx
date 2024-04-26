import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import ThemedContainer from '../components/ThemedContainer';
import LottieView from 'lottie-react-native';

const LoginScreen = () => {
  const animation = useRef(null);

  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  return (
    <ThemedContainer>
      <View className='flex-1 justify-center items-center'>
        <Text className='text-white m-8 '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          laborum iste tempora maxime sint doloremque ex eius officia, quam
          placeat voluptatem asperiores animi excepturi non, doloribus sunt amet
          quia velit? quia velit? quia velit?
        </Text>

        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#161622',
            margin: 'auto',
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require('../../assets/anim/book.json')}
        />
      </View>
    </ThemedContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
