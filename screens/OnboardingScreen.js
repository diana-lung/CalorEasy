import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)';

    return (
        <View
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:17}}
        {...props}
    >
        <Text style={{fontSize:16, color: '#fff'}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:17}}
        {...props}
    >
        <Text style={{fontSize:16, color: '#fff'}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:17}}
        {...props}
    >
        <Text style={{fontSize:16, color: '#fff'}}>Done</Text>
    </TouchableOpacity>
);



const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
            DotComponent={Dots}
            NextButtonComponent={Next}
            SkipButtonComponent={Skip}
            DoneButtonComponent={Done}
            titleStyles={{color: "#3f3d56", fontFamily: "Lato-Bold"}}
            subTitleStyles={{color: '#888', fontFamily: 'space-mono'}}
            bottomBarColor = { "#8ec140"}

            onSkip={()=>navigation.replace('Login')}
            onDone={()=>navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.image} source={require('../assets/images/onboarding.png')}/>,
                    title: 'CalorEasy App',
                    subtitle: 'The best way to keep track of your meals and stay fit',

                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.image}
                                  source={require('../assets/images/onboarding1.png')}/>,
                    title: 'Healthy Recipes',
                    subtitle: 'Check out all the recipes selected specifically for you',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.image}
                                  source={require('../assets/images/onboarding2.png')}/>,
                    title: 'Meal Planner',
                    subtitle: 'Add your favourite recipes to your weekly meal planner',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.image}
                                  source={require('../assets/images/onboarding3.png')}/>,
                    title: 'Reach Your Goal',
                    subtitle: 'Get healthy and back in shape in no time',
                },
            ]}/>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        color: "#fff"
    },
    image: {
        width: 350,
        height: 350,
        resizeMode: 'contain'
    },
});
