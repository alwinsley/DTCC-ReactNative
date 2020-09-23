import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet,RefreshControl, Image } from 'react-native';
import HTML from "react-native-render-html";
import { WebView } from 'react-native-webview';
import Moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';



function SermonSourceComponent({id, sermonTitle, speaker, source }) {

  return (
      <>
      <View style={{backgroundColor: '#000', height: 300}}>
<View style={{backgroundColor: '#000',height: 250, width: '100%'}}>
<WebView
   source={{html: `<div><iframe width="100%" height="100%" src="https://www.youtube.com/embed/${source}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
    `}}
   style={{backgroundColor: '#000'}}
/>
</View>

</View>
     </>       
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#150018',
  },
  title: {
    fontFamily: 'Coluna_Rounded',
    color: '#fff',
    marginTop: 18,
    marginLeft: 10,
    marginBottom: 0,
    fontSize: 32,
    lineHeight: 34,
    marginBottom: 0,
  },
  speaker: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 0,
  },
  date: {

    color: '#666',
    fontStyle: 'italic',
    marginTop: 0,
    fontSize: 14,
    marginLeft: 10,

  },
  linearGradient: {
    padding: 5,
    borderRadius: 5,
    margin: 10,
    color: 'white',
    
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#fff',
  },

});

export default SermonSourceComponent;