import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { StatusBar } from 'expo-status-bar';
import ThemedContainer from '../components/ThemedContainer';
import { icons, images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

WebBrowser.maybeCompleteAuthSession();

// Example type definition
interface ActiveSession {
  session: string;
}

const SocialAccountScreen = () => {
  const [isLoading, setisLoading] = useState(false);
  //   const [active, setActive] = useState<any>(null);
  useWarmUpBrowser();
  const { startOAuthFlow: startOAuthFlowGoogle } = useOAuth({
    strategy: 'oauth_google',
  });
  const { startOAuthFlow: startOAuthFlowFacebook } = useOAuth({
    strategy: 'oauth_facebook',
  });
  const { startOAuthFlow: startOAuthFlowApple } = useOAuth({
    strategy: 'oauth_apple',
  });

  const onPressGoogle = React.useCallback(async () => {
    try {
      setisLoading(true);
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlowGoogle();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        console.log('yes added');
        console.log(createdSessionId);
        setisLoading(false);
      } else {
        setisLoading(false);
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);
  const onPressFacebook = React.useCallback(async () => {
    try {
      setisLoading(true);
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlowFacebook();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        console.log('yes added');
        console.log(createdSessionId);
        setisLoading(false);
      } else {
        setisLoading(false);
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);
  const onPressApple = React.useCallback(async () => {
    try {
      setisLoading(true);
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlowApple();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        console.log('yes added');
        console.log(createdSessionId);
        setisLoading(false);
      } else {
        setisLoading(false);
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <ThemedContainer>
      <View className='flex-1 h-full justify-center p-4'>
        <Image
          style={{
            width: responsiveScreenWidth(60),
            height: responsiveScreenHeight(5),
          }}
          resizeMode='contain'
          source={images.logo}
        />
        <View
          className='my-5  overflow-x-hidden'
          style={{ maxWidth: responsiveScreenWidth(85) }}
        >
          <View className='flex-row gap-2 items-center my-2'>
            <Text className='font-psemibold text-xl text-white'>
              Welcome to
            </Text>
            <Text className='text-secondary-100 text-2xl font-psemibold'>
              Aora
            </Text>
          </View>
          <Text
            className='text-white font-plight mt-2'
            style={{ fontSize: responsiveScreenFontSize(2.1) }}
          >
            Create your account to discover and share amazing books
          </Text>
        </View>
        <View>
          <CustomButton
            handlePress={onPressApple}
            title={'continue with Apple'}
            icon={icons.apple}
            textStyles={'text-sm'}
            containerStyles={'flex-row space-around gap-1 items-center my-2'}
            isLoading={isLoading}
            iconStyles={'mr-5'}
          />
          <CustomButton
            handlePress={onPressFacebook}
            title={'continue with Facebook'}
            icon={icons.facebook}
            textStyles={'text-sm'}
            containerStyles={'flex-row space-around gap-1 items-center my-2'}
            isLoading={isLoading}
            iconStyles={'mr-5'}
          />
          <CustomButton
            handlePress={onPressGoogle}
            title={'continue with Google'}
            icon={icons.google}
            textStyles={'text-sm'}
            containerStyles={'flex-row space-around gap-1 items-center my-2'}
            isLoading={isLoading}
            iconStyles={'mr-5'}
          />
        </View>
      </View>
      <StatusBar backgroundColor='#161622' style='light' />
    </ThemedContainer>
  );
};

export default SocialAccountScreen;

const styles = StyleSheet.create({});
