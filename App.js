import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import { Platform, Image, LinearGradient } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Svg, G, Path, ViewBox, D, SvgXml} from 'react-native-svg';
import SplashScreen from 'react-native-splash-screen'



import HomeScreen from './src/Screens/HomeScreen';
import LiveScreen from './src/Screens/LiveScreen';
import TruthMinuteScreen from './src/Screens/TruthMinute';
import SoulTherapyScreen from './src/Screens/SoulTherapyScreen';



import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,

} from 'react-native/Libraries/NewAppScreen';





const Stack = createStackNavigator();



function App() {

  useEffect(() => {
    setTimeout(()=>{
      SplashScreen.hide();
     }, 2000)
  }, [])

  return (
    <>

    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}

        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Live"
            component={LiveScreen} 
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#000'
              },
              headerBackground: () => (
                <Image  style={{
                  height: 56,
                  width: '100%',
                  backgroundColor: '#000',
                }} 
                  source={require('./src/images/darkPurpleGradient.jpg')} />
              ),
              headerTintColor: 'white',
              headerTitleStyle: {
              color: 'white',
              }
            }}
          />
          <Stack.Screen
            name="TruthMinute"
            component={TruthMinuteScreen} 
            options={{
              headerBackground: () => (
                <Image  style={{
                  height: 56,
                  width: '100%',
                  backgroundColor: '#000',
                }} 
                  source={require('./src/images/darkPurpleGradient.jpg')} />
              ),
              headerTintColor: 'white',
              headerShown: true,
              headerTitleStyle: {
                color: 'white',
              }
            }}
          />
          <Stack.Screen
            name="SoulTherapy"
            component={SoulTherapyScreen} 
            options={{
              headerBackground: () => (
                <Image  style={{
                  height: 56,
                  width: '100%',
                  backgroundColor: '#000',
                }} 
                  source={require('./src/images/darkPurpleGradient.jpg')} />
              ),
              headerTintColor: 'white',
              headerShown: true,
              headerTitleStyle: {
                color: 'white',
              }
            }}
          />
        </Stack.Navigator>
          
     
      </NavigationContainer>
    </>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
