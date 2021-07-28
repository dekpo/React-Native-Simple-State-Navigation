import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

const SettingsPage = () => (
  <View style={styles.content}>
    <Text>Settings Page</Text>
  </View>
);
  
export default SettingsPage

const styles = StyleSheet.create({
  content: {
    flex: 4,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});