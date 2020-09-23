import React, {useState, useEffect} from 'react';
import { View, Text, Header,TouchableNativeFeedback, Image, StyleSheet, Button } from 'react-native';
import YouTube from 'react-native-youtube';
import LinearGradient from 'react-native-linear-gradient';
import Moment from 'moment';
import { WebView } from 'react-native-webview';
 



import Icon from '../svgs/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ytvideoId ="PNcy33tvoxU"

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


function LiveScreen({navigation}) {

  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);



  const [liveSermons, setLiveSermons] = useState([]);
  useEffect(() => {
      async function loadLiveSermons() {
          const response = await fetch('https://www.divinetruthcc.org/wp-json/wp/v2/ctc_sermon');
          if(!response.ok) {
              // oups! something went wrong
              return;
          }
  
          const liveSermons = await response.json();
          (setLiveSermons(liveSermons));
      }
  
      loadLiveSermons();
 }, [])


 var currentDate = Moment(new Date()).format('MMM DD, YYYY ');
 var dt = liveSermons.date;

 const sermonTitle = liveSermons[0];
// const sermonTitle = liveSermons.forEach((f,i) => {
//   if(i === 0){
//     let title = f.title.rendered
//     return title;
//   }
// })

  return (
      <>

   

    {/* <YouTube
        apiKey="AIzaSyDqVKLGz-IuhX2j0N18elYrhC2BSmYX3TY"
        videoId={ytvideoId} // The YouTube video ID
        play // control playback of video with true/false
        // fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended

        style={{ alignSelf: 'stretch', height: 235 }}
    /> */}

<WebView
   source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/live_stream?channel=UCFMZnuc_N6eB7dRbSvhAKIA&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
   style={{backgroundColor: '#000'}}
/>

     <View style={{backgroundColor: 'black' }}>
   <Text style={styles.date}><Icon name="Clock" fill="purple" />{currentDate}</Text>

         {/* <Text style={styles.title}>{sermonTitle.title.rendered}</Text> */}

  <Text style={styles.speaker}>Pastor Andre Martin</Text>
    </View>
    <View style={{backgroundColor: 'black', height: "100%", flex: 1, justifyContent: 'flex-end' }}>
    <TouchableOpacity onPress={()=>navigation.navigate('Give')}>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#5F0F40', '#310E68']} style={styles.linearGradient}>
    <Text style={styles.buttonText}><Icon name="Give" fill="white" />Give</Text>
    </LinearGradient>
    </TouchableOpacity>
   
    {/* <TouchableNativeFeedback onPress={()=>navigation.navigate('Give')}>
        <Image 
          style={{
          height: 100,
          width: '100%',
        }}
          source={require('../images/give.png')}
          />
      </TouchableNativeFeedback> */}
     
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Coluna_Rounded',
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
  speaker: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 14,
    marginLeft: 10,
  },
  linearGradient: {
    padding: 5,
    borderRadius: 5,
    margin: 10,
    color: 'white',
    
  },
  buttonText: {
    fontFamily: 'Coluna_Rounded',
    fontSize: 30,
    textAlign: 'center',
    marginTop: -10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginBottom: 0,
  },

})

export default LiveScreen;