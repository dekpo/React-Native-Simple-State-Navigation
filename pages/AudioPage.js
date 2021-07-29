import React from 'react';
import {  StyleSheet, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const AUDIO_STREAM = "https://radio.dekpo.com/stream.mp3";
// ou voir la liste ici https://www.hionline.eu/streaming-url/

const AudioPage = ({toggle}) => {
  const [sound,setSound] = React.useState(null);

  async function playMySound() {
    if (sound ===  null) {
      const { sound } = await Audio.Sound.createAsync({
        uri: AUDIO_STREAM
      });
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
    } else {
      setSound(null);
          console.log("Stopping Sound");
          await sound.stopAsync();
          await sound.unloadAsync();
    }
  }
  
  
  return(
  <View style={styles.content}>
    <TouchableOpacity onPress={playMySound}>
    <Ionicons name={
      sound === null ? "play-circle" : "pause-circle"
    }  size={240} color="black" />
    </TouchableOpacity>
  </View>
  )
}

export default AudioPage

const styles = StyleSheet.create({
  content: {
    flex: 4,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});