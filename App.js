import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import * as Linking from 'expo-linking';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { Ubuntu_400Regular, useFonts } from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [page, setPage] = React.useState('Home');

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

      <ScrollView>
      {(() => {
        switch (page) {
          case 'Home':
            return <HomePage />
          case 'Settings':
            return <SettingsPage />
          case 'Gallery':
            return <GalleryPage />
          case 'Contact':
            return <ContactPage />
        }
      })()}
      </ScrollView>

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
            setPage('Contact');
          }
        }>
          <Ionicons name="md-mail" size={24} color="black" />
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
