import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';


export default function App() {
  const [page, setPage] = React.useState('Home');

  const instaLink = () => {
    Linking.openURL('https://instagram.com/dekpowyna')
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
        <Text>Header</Text>
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
          case 'Contact':
            return <ContactPage />
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
