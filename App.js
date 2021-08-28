import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Video from 'react-native-video';

export default function App() {
  return ( 
    <View style={{backgroundColor: 'grey', flex: 1,}}>
    <Text>Video Player</Text>
    <View style={{backgroundColor: 'coral', flex:1,height:'100%', width: '100%',  }}>
      <Video 
        source={{
          uri: 'https://brisbane2.hopto.org/movies/src/moana.mp4',
        }} 
        posterResizeMode={'center'}
        style={{left: 50, top:50, height:400, width: 400 }}
        controls={true}
        fullscreen={true}
    
        
       
      />
      </View>
    </View>
  );
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});