import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from './routes'
export default function App() {
  return (
    <View style={styles.container}>
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000014',
    
  },
});
