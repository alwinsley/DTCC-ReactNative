import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, News, StyleSheet, Colors, Image, ScrollView, RefreshControl, Modal,SafeAreaView, ActivityIndicator, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-material-ui';
import HTML from "react-native-render-html";
import Moment from 'moment';

import TruthMinuteModal from '../../components/TruthMinuteModal';
import TruthMinuteComponent from '../../components/TruthMinuteComponent';


const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  

function TruthMinuteScreen({navigation}) {

  const [loading, setLoading] = useState(true);

    const [refreshing, setRefreshing] = React.useState(false);
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
  
      wait(2000).then(() => setRefreshing(false));
    }, []);

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('https://www.divinetruthcc.org/wp-json/wp/v2/posts/?categories=123');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const posts = await response.json();
            (setPosts(posts));
        }
    
        loadPosts();
        if(posts == []){
          setLoading(true)
        }else {
          setTimeout(()=>{
            setLoading(false)
           }, 4000)
          
        }

   }, [refreshing])


   Moment.locale('en');
   var dt = posts.date;
   
   return loading ?  ( 
    <View style={{flex: 1, backgroundColor: "#000", justifyContent: 'center'}}>
      <ActivityIndicator color="#fff" size="large" />
      </View>

   ) : 
(
    <>
    

     <ScrollView  contentContainerStyle={styles.scrollView}
     refreshControl={
     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> } >
      {posts.map((post, index) => (
      <View key={index}>
        <TruthMinuteComponent postTitle ={post.title.rendered} postContent={post.content.rendered} date={dt} imgSource={post.featured_url}/>
      </View>
     ))}
    </ScrollView>
    </>
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

export default TruthMinuteScreen;

