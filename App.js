import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import * as Linking from 'expo-linking';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import GalleryPage from './pages/GalleryPage';
import AudioPage from './pages/AudioPage';
import { Ubuntu_400Regular, useFonts } from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';
import { Audio } from 'expo-av';

const AUDIO_STREAM = "https://radio.dekpo.com/stream.mp3";
// ou voir la liste ici https://www.hionline.eu/streaming-url/

export default function App() {
  const [page, setPage] = React.useState('Home');
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
          //await sound.unloadAsync();
    }
  }
  

  const instaLink = () => {
    Linking.openURL('https://instagram.com/dekpowyna')
  }

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular
  });

  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={
          () => {
            setPage('Home');
          }
        }>
          <Ionicons name="md-home" size={24} color="black" />
        </TouchableOpacity>
        <Text style={
          {
            fontFamily:'Ubuntu_400Regular',
            fontSize: 40
          }
        }>My App</Text>
        <TouchableOpacity onPress={
          () => {
            setPage('Settings');
          }
        }>
          <Ionicons name="md-settings" size={24} color="black" />
        </TouchableOpacity>
      </View>

      
      
      {(() => {
        switch (page) {
          case 'Home':
            return <HomePage />
          case 'Settings':
            return <SettingsPage />
          case 'Gallery':
            return <GalleryPage />
          case 'Audio':
            return <AudioPage toggle={playMySound} sound={sound} />
        }
      })()}
      

      <View style={styles.footer}>
        <TouchableOpacity onPress={
          () => {
            setPage('Gallery');
          }
        }>
          <Ionicons name="md-apps" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={instaLink}>
          <Ionicons name="md-logo-instagram" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={
          () => {
            setPage('Audio');
          }
        }>
          <Ionicons name="play-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', */
  },
  header: {
    height: 90,
    padding: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    flex: 4,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    height: 80,
    padding: 20,
    borderTopColor: 'black',
    borderTopWidth: 1,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
