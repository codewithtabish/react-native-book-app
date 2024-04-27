import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import ThemedContainer from '../components/ThemedContainer';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

const SignUp = () => {
  const [isLoading, setisLoading] = useState(false);
  const inputField = useRef(null);
  const [showImage, setshowImage] = useState(true);

  const handleSignUp = async () => {
    setisLoading(true);
    // register('zain@gmail.com', 'password', 'name');

    // changeInputFieldFocus();
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  };

  return (
    <ThemedContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View className='flex-1 h-screen justify-center   p-4'>
          <Image
            source={images.logo}
            style={{
              width: responsiveScreenWidth(55),
              height: responsiveScreenHeight(6),
              resizeMode: 'contain',
            }}
          />
          <Text className='text-white font-psemibold text-2xl my-3'>
            welcome to Aora
          </Text>
          <TextInput
            selectTextOnFocus={true}
            enterKeyHint='enter'
            cursorColor={'#FF9001'}
            keyboardAppearance='dark'
            className='bg-black-100  p-3  border-gray-50 border-[1px] rounded-md my-2
          focus:border-secondary focus:border-2 text-white '
            placeholder='userName'
            placeholderTextColor='gray'
          />
          <TextInput
            selectTextOnFocus={true}
            enterKeyHint='enter'
            cursorColor={'#FF9001'}
            keyboardAppearance='dark'
            keyboardType='email-address'
            className='bg-black-100  p-3  border-gray-50 border-[1px] rounded-md my-2
          focus:border-secondary focus:border-2 text-white '
            placeholder='Email'
            placeholderTextColor='gray'
          />
          <TextInput
            cursorColor={'#FF9001'}
            keyboardAppearance='dark'
            className='bg-black-100  p-3  border-gray-50 border-[1px] rounded-md my-2
               focus:border-secondary focus:border-2 text-white'
            placeholder='password'
            placeholderTextColor='gray'
          />

          <CustomButton
            handlePress={handleSignUp}
            title='SignUp'
            className='my-3'
            isLoading={isLoading}
            textStyles={'font-psemibold'}
            containerStyles={'mt-4'}
          />
          <View className=' flex-row  justify-center items-center self-center gap-2 my-5 '>
            <Text className='text-gray-100 font-pregular text-center self-center'>
              Already have an account ?
            </Text>
            <TouchableOpacity className='block'>
              <Text className='text-secondary-100 text-xl font-semibold -mt-2 self-center'>
                SignIn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ThemedContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
