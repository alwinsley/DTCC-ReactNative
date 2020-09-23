import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet,RefreshControl, Image, Modal, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import HTML from "react-native-render-html";
import { WebView } from 'react-native-webview';
import Moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import SermonSourceComponent from './sermonSourceComponent';



function SermonComponent({id, sermonTitle, speaker, img, date, source, navigation}) {

  

  const [visible, setVisible] = useState(false)
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
      
    <>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
      >
        <View style={{marginTop: 0,backgroundColor: '#000', height: '100%'}}>
          <SermonSourceComponent id={id} sermonTitle={sermonTitle} speaker={speaker} source={source} />
          <Button title="Close" onPress={() => {setModalVisible(!modalVisible);}} />
        </View>
    </Modal>


      <TouchableOpacity onPress={() => {setModalVisible(true);}}>
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
    
           <Image 
          style={{
          height: 200,
          width: '100%',
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        source={{uri: img}}
          />
         
            <Text style={styles.title}>{sermonTitle}</Text>
            <Text style={styles.speaker}>{speaker}</Text>
            <Text style={styles.date}>{date}</Text>
 
           </LinearGradient>
        </TouchableOpacity>

          
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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default SermonComponent;