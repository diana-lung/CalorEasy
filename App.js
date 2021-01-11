import React, {useEffect} from 'react';
import Providers from "./navigation";
import SplashScreen from 'react-native-splash-screen';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    hideNavigationBar();
  }, []);


  return <Providers/>
}

export default App;
