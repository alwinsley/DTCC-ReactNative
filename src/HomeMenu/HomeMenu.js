import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, TouchableOpacity, TouchableNativeFeedback } from 'react-native';


function HomeMenu({ navigation }) {
  return (
    <ScrollView>
        <TouchableNativeFeedback onPress={()=>navigation.navigate('Live')}>
          <Image 
            style={{
            height: 200,
            width: '100%',
          }}
            source={require('../images/watchLive.png')}
            />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=>navigation.navigate('News')}>
        <Image 
          style={{
          height: 200,
          width: '100%',
        }}
          source={require('../images/announcements.png')}
          />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={()=>navigation.navigate('Give')}>
        <Image 
          style={{
          height: 200,
          width: '100%',
        }}
          source={require('../images/give.png')}
          />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={()=>navigation.navigate('TruthMinute')}>
        <Image 
          style={{
          height: 200,
          width: '100%',
        }}
          source={require('../images/truthminute.png')}
          />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={()=>navigation.navigate('SoulTherapy')}>
        <Image 
          style={{
          height: 200,
          width: '100%',
        }}
          source={require('../images/soultherapy.png')}
          />
      </TouchableNativeFeedback>
      </ScrollView>
  );
}

export default HomeMenu;