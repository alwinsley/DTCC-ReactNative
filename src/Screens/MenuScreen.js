import * as React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from '../svgs/Icon';


function MenuScreen({navigation}) {
  return (
    <ScrollView style={styles.scrollView}>
     <View style={{marginTop: 45}}>

<TouchableOpacity onPress={()=>navigation.navigate('Live')}>
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>Watch Live</Text>
  </LinearGradient>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('News')}>
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>News</Text>
  </LinearGradient>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('Sermons')}>
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>Sermons</Text>
  </LinearGradient>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('Give')}>
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>Give</Text>
  </LinearGradient>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('TruthMinute')}>
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>Truth Minute Blog</Text>
  </LinearGradient>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('SoulTherapy')}>
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>Soul Therapy Podcast</Text>
  </LinearGradient>
</TouchableOpacity>

<TouchableOpacity >
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>Prayer Request <Text style={styles.soon}>Coming soon...</Text></Text>
  </LinearGradient>
</TouchableOpacity>
<TouchableOpacity >
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>Join A Ministry <Text style={styles.soon}>Coming soon...</Text></Text>
  </LinearGradient>
</TouchableOpacity>
<TouchableOpacity >
  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>Volunteer <Text style={styles.soon}>Coming soon...</Text></Text>
  </LinearGradient>
</TouchableOpacity>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%'
  },
  body: {
    backgroundColor: '#fff',
  },
  linearGradient: {
    paddingBottom: 15,
    borderRadius: 0,
    margin: 1,
    color: 'white',
    flex: 1,
    width: '100%'
    
  },
  buttonText: {
    fontFamily: 'Coluna_Rounded',
    fontSize: 24,
    textAlign: 'left',
    paddingTop: 20,
    paddingLeft: 15,
    flex: 1,
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginBottom: 0,
    marginTop: 0,
  },
  soon: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',

  }
});

export default MenuScreen;