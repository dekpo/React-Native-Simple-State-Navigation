import React from 'react';
import {  StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const AudioPage = ({toggle,sound}) => {
  
  
  return(
  <View style={styles.content}>
    <TouchableOpacity onPress={() => { toggle() }}>
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