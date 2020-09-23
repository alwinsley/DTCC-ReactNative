import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Moment from 'moment';
import { WebView } from 'react-native-webview';


function SoulTherapyScreen() {
  return (

        <WebView
   source={{html: "<div id='buzzsprout-small-player-1025161'></div><script type='text/javascript' charset='utf-8' src='https://www.buzzsprout.com/1025161.js?container_id=buzzsprout-small-player-1025161&player=small'></script>"}}
   style={{backgroundColor: '#000'}}
/>

  );
}

export default SoulTherapyScreen;