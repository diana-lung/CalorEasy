import React, {useEffect} from 'react';
import Providers from "./navigation";
import SplashScreen from 'react-native-splash-screen';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['source.uri should not be an empty string']);



const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    hideNavigationBar();
  }, []);


  return <Providers/>
}

export default App;
