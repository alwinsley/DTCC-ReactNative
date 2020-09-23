import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, RefreshControl, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Card, ListItem, Button, Icon, withTheme } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import HTML from "react-native-render-html";
import Moment from 'moment';


 const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

function NewsScreen() {

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      wait(2000).then(() => setRefreshing(false));
    }, []);

    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
      
        async function loadAnnouncements() {
            const response = await fetch('https://www.divinetruthcc.org/wp-json/wp/v2/posts/?categories=347');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const announcements = await response.json();
            (setAnnouncements(announcements));
        }
    
        loadAnnouncements();
        if(announcements == []){
          setLoading(true)
        }else {
          setTimeout(()=>{
            setLoading(false)
           }, 3000)
          
        }
        
   }, [refreshing])



   Moment.locale('en');
   var dt = announcements.date;
   
   

  return loading ?  ( 
          <View style={{flex: 1, backgroundColor: "#000", justifyContent: 'center'}}>
            <ActivityIndicator color="#fff" size="large" />
            </View>
     
         ) : 
(
    <>
      <Image style={{
              height: 116,
              width: '100%',
              backgroundColor: '#000',
              }} 
              source={require('../images/churchFrontBright.png')} />
     <Image style={{
              height: 70,
              width: 70,
              position: 'absolute',
              top: 80,
              left: 20,
              zIndex: 99,
              borderRadius: 50,
              backgroundColor: '#310E68',
              padding: 10,
              borderColor: '#000',
              borderWidth: 0,
              }} 
              source={require('../images/dtccLogo.png')} />
     
     <ScrollView style={styles.scrollView}
     refreshControl={
     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> } >
      {announcements.map((announcement, index) => (
      <View key={index}>
          
          <HTML html={'<p style="font-family:Coluna_Rounded;color:#FFFFFF;font-size:20px;font-weight:bold;margin-top:30px;margin-left:10px;margin-bottom:0;padding:10px;">' + announcement.title.rendered + '<br/>' 
          + '<p style="font-family:Arial;color:#FFFFFF;font-size:14px;margin-bottom:0;margin-right:10px;">' + announcement.content.rendered + '</p><hr/>'} />

      </View>
     ))}
    </ScrollView>
 </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000'
  },
  pageTitle: {
    fontFamily: 'Coluna_Rounded',
    color: 'white',
    padding: 15,
    fontSize: 20,
  },
  title: {
    fontFamily: 'Coluna_Rounded',
    fontSize: 30,
    color: 'white',
  },
  content: {
    color: 'white',
  },
  date: {
    fontSize: 11,
    color: 'grey',
    marginTop: 5
  },
  linearGradient: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    margin: 10,
    color: 'white',
    
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Coluna_Rounded',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})

export default NewsScreen;