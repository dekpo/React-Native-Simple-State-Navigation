import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

const GalleryPage = () => (
    <View style={styles.content}>
      <Text>Gallery Page</Text>
    </View>
  );
  
export default GalleryPage

const styles = StyleSheet.create({
  content: {
    flex: 4,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});