import React, {useEffect} from 'react';
import Providers from "./navigation";
import SplashScreen from 'react-native-splash-screen';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['source.uri should not be an empty string']);
LogBox.ignoreLogs(["right was given a value of 0, this has no effect on headerStyle."])
LogBox.ignoreLogs(["left was given a value of 0, this has no effect on headerStyle."])
LogBox.ignoreLogs(["top was given a value of 0, this has no effect on headerStyle."])
LogBox.ignoreLogs(["bottom was given a value of 0, this has no effect on headerStyle."])
LogBox.ignoreLogs(["zIndex was given a value of 100, this has no effect on headerStyle."])
LogBox.ignoreLogs(["Warning: React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead."])




    const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    hideNavigationBar();
  }, []);


  return <Providers/>
}

export default App;
