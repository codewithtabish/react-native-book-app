import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useUser, SignedOut, useAuth } from '@clerk/clerk-expo';

const HomeScreen = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useAuth();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  console.log('The user is ', user);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>Hello, {user?.firstName} welcome to Clerk</Text>
      <TouchableOpacity
        className='bg-secondary-200 p-3 rounded-md m-4'
        onPress={() => {
          signOut();
        }}
      >
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
