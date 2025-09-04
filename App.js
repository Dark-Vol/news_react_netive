import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Main from './components/Main';
import Contacts from './components/Contacts';


const getFonts = () => Font.loadAsync({
  'latto-bold': require('./assets/fonts/Lato-Bold.ttf'),
  'latto-italic': require('./assets/fonts/Lato-Italic.ttf'),
  'latto-light': require('./assets/fonts/Lato-Light.ttf'),
});


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('main');

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await getFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const navigateToContacts = () => setCurrentScreen('contacts');
  const navigateToMain = () => setCurrentScreen('main');

  if (currentScreen === 'contacts') {
    return <Contacts onBack={navigateToMain} />;
  }

  return <Main onNavigateToContacts={navigateToContacts} />;
}