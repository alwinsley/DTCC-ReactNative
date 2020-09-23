import { CenterFocusStrong } from '@material-ui/icons';
import * as React from 'react';
import { View, Text, Image, ScrollView, RefreshControl, SafeAreaView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HTML from "react-native-render-html";

import { WebView } from 'react-native-webview';

import Icon from '../svgs/Icon';


const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


function GiveScreen({navigation}) {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
    <View style={{ backgroundColor: '#000',padding: 0, height: '100%', width: '100%'}}>
       {/* <Image style={{
              height: 116,
              width: '100%',
              backgroundColor: '#000',
              marginBottom: 70
              }} 
              source={require('../images/churchFrontBright.png')} />
     <Image style={{
              height: 70,
              width: 70,
              position: 'absolute',
              top: 80,
              left: 20,
              backgroundColor: '#000',
              zIndex: 99,
              borderRadius: 50,
              backgroundColor: '#310E68',
              padding: 10,
              borderColor: '#000',
              borderWidth: 0,
              }} 
              source={require('../images/dtccLogo.png')} /> */}


<WebView style={{padding: 0, marginTop: 0, width: '100%', height: '100%', backgroundColor: '#000'}} source={{uri: 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=QRNP8E3B6PAGY'}} />


      {/* <TouchableOpacity onPress={() => navigation.goBack(null)}><Icon name="Back" /></TouchableOpacity> */}
      {/* <ScrollView style={{backgroundColor: '#000', height: '100%', width: '100%'}}
        contentContainerStyle={styles.scrollView}
        refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> } >
          
      
       
           
          
  <View style={{marginTop: 45}}>

    <TouchableOpacity >
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
      <Text style={styles.buttonText}><Icon name="Give" fill="white" />Give $20</Text>
      </LinearGradient>
    </TouchableOpacity>

    <TouchableOpacity >
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#222', '#222']} style={styles.linearGradient}>
      <Text style={styles.buttonText}><Icon name="Give" fill="white" />Give $50</Text>
      </LinearGradient>
    </TouchableOpacity>
    </View>
      </ScrollView> */}
      </View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    backgroundColor: '#000'
  },
  title: {
    fontFamily: 'Arial',
    color: '#fff',
    marginTop: 18,
    marginLeft: 8,
    fontSize: 42,
    lineHeight: 41,
    marginBottom: 0,
  },
  date: {
    color: '#fff',
    fontStyle: 'italic',
    marginTop: -10,
    fontSize: 14,
    marginLeft: -14,

  },
  linearGradient: {
    paddingTop: 0,
    paddingBottom: 15,
    borderRadius: 5,
    margin: 10,
    color: 'white',
    flex: 1
    
  },
  buttonText: {
    fontFamily: 'Coluna_Rounded',
    fontSize: 26,
    textAlign: 'center',
    flex: 1,
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginBottom: 0,
  },

})

export default GiveScreen;