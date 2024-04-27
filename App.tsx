import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ClerkProvider } from '@clerk/clerk-expo';
import tokenCache from './src/utils/tokenCache';

export default function App() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  console.log(apiUrl);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ClerkProvider
          tokenCache={tokenCache}
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
