import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

const ContactPage = () => (
  <View style={styles.content}>
    <Text>Contact Page</Text>
  </View>
);

export default ContactPage

const styles = StyleSheet.create({
  content: {
    flex: 4,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});