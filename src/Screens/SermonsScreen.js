import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet,RefreshControl, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import Moment from 'moment';

import SermonComponent from '../../components/sermonComponent';


const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

function SermonsScreen() {

  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);


  const [sermons, setSermons] = useState([]);
  useEffect(() => {
      async function loadSermons() {
          const response = await fetch('https://vkp2w8z8bc.execute-api.us-east-1.amazonaws.com/Prod/sermons', {

            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
          });
          if(!response.ok) {
              // oups! something went wrong
              return;
          }
  
          const sermons = await response.json();
          (setSermons(sermons));
      }
  
      loadSermons();
 }, [])


 Moment.locale('en');
 var dt = sermons.date;


  return (
   
     
    <ScrollView  contentContainerStyle={styles.scrollView}
     refreshControl={
     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> } >
      {sermons.map((sermon, index) => (
      <View key={index}>
          <SermonComponent id={sermon.id} sermonTitle={sermon.title} speaker={sermon.speaker} img={sermon.img} source={sermon.source} date={sermon.createdAt} />
      </View>
     ))}

    {/* {images.map((image, index) => (
      <View key={index}>
          <SermonComponent mediaId = {image.source_url} mediaImg={image.id}/>
      </View>
     ))} */}
    </ScrollView>
    
  
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#150018',
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

export default SermonsScreen;