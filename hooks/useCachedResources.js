import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
                    ...Ionicons.font,
                    'Kufam-SemiBoldItalic': require('../assets/fonts/Kufam-SemiBoldItalic.ttf'),
                    ...Ionicons.font,
                    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
                    ...Ionicons.font,
                    'Lato-BoldItalic': require('../assets/fonts/Lato-BoldItalic.ttf'),
                    ...Ionicons.font,
                    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
                    ...Ionicons.font,
                    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
