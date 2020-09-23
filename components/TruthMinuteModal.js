import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet,RefreshControl, Image } from 'react-native';
import HTML from "react-native-render-html";
import { WebView } from 'react-native-webview';
import Moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';



function TruthMinuteModal({id, postTitle, postContent, date, sourceImg }) {

    

  return (
      <>
      <ScrollView style={{backgroundColor: '#000', height: '90%'}}>
<View style={{backgroundColor: '#000',height: '90%', width: '100%'}}>
    
<HTML html={`<img src="${sourceImg}" style="display:block;width:100%;height:200px" /><p style="font-family:Arial;font-size:26px;font-weight:bold;margin-left:10px;margin-bottom:0;padding-top:20px;color:white;">${postTitle}<br/><br/> 
<span style="color:white;font-size:18px;margin:0;padding:0;font-weight:normal;"> ${postContent} </span></p>`} />

</View>

</ScrollView>
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

export default TruthMinuteModal;