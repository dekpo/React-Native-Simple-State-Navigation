import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

const HomePage = () => (
    <View style={styles.content}>
      <Text>Home Page</Text>
    </View>
  );
  
export default HomePage

const styles = StyleSheet.create({
  content: {
    flex: 4,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});