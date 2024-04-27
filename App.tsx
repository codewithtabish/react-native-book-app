import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ClerkProvider } from '@clerk/clerk-expo';

export default function App() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  console.log(apiUrl);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ClerkProvider
          publishableKey={
            'pk_test_b3B0aW1hbC1kb2UtOTIuY2xlcmsuYWNjb3VudHMuZGV2JA'
          }
        >
          <AppNavigator />
        </ClerkProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
