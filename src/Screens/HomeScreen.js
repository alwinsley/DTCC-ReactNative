import React, {useState, useEffect} from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '../svgs/Icon';

import HomeMenu from '../HomeMenu/HomeMenu';

import CalendarScreen from '../Screens/CalendarScreen';
import GiveScreen from '../Screens/GiveScreen';
import NewsScreen from '../Screens/NewsScreen';
import MenuScreen from '../Screens/MenuScreen';
import LiveScreen from '../Screens/LiveScreen';
import SermonsScreen from '../Screens/SermonsScreen';


const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {



  return (
    <>
      <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#301934',
            style: {
              paddingBottom: 5
            }
          }}
        >
           <Tab.Screen
              name="Home"
              component={HomeMenu}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="Home" fill={color} size={size} />
                ),
              }}
            />
          
            <Tab.Screen 
              name="News"
              component={NewsScreen}
              options={{
                tabBarLabel: 'News',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="News" fill={color}  size={size} />
                ),
              }}
            />
             <Tab.Screen 
              name="Sermons"
              component={SermonsScreen}
              options={{
                tabBarLabel: 'Sermons',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="VideoBox" fill={color}  size={size} />
                ),
              }}
              />
            <Tab.Screen 
              name="Give"
              component={GiveScreen}
              options={{
                tabBarLabel: 'Give',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="Plant" fill={color}  size={size} />
                ),
              }}
            />
            <Tab.Screen 
              name="Menu"
              component={MenuScreen}
              options={{
                tabBarLabel: 'Menu',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="Menu" fill={color}  size={size} />
                ),
              }}
            />

           

          </Tab.Navigator>
    </>
  );
}



export default HomeScreen;