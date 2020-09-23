import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet,RefreshControl, Image, Modal, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import HTML from "react-native-render-html";
import { WebView } from 'react-native-webview';
import Moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

import TruthMinuteModal from './TruthMinuteModal';



function TruthMinuteComponent({id, postTitle, postContent, date, imgSource, navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
  
    return (
        
      <>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
      >
        <View style={{marginTop: 0,backgroundColor: '#000', height: '100%'}}>
          <TruthMinuteModal postTitle={postTitle} postContent={postContent} sourceImg={imgSource} date={date} />
          <Button title="Close" onPress={() => {setModalVisible(!modalVisible);}} />
        </View>
    </Modal>
  
  
       
 <TouchableOpacity onPress={() => {setModalVisible(true);}}>
    <View style={{backgroundColor: '#000', borderWidth: 1, borderColor: '#333',margin: 20, marginBottom: 10, borderRadius: 6}} >
        <Image 
        style={{
        height: 200,
        width: '100%',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        }}
        source={{uri: imgSource }}
        />
        <HTML html={'<p style="font-family:Arial;font-size:22px;color:white;font-weight:bold;margin-left:10px;margin-bottom:0;padding:0;">' + postTitle + '</p>' + '<p style="margin-left:10px;font-size:12px;font-weight:normal;color:grey"><em>' + Moment(date).format('MMM d, YYYY ')  +'</em></p>'} />
            {/* <HTML html={post.content.rendered} /> */}
    </View>
  </TouchableOpacity>
  
            
        </>
    );
  }

  
export default TruthMinuteComponent;



