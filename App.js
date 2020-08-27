import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView } from 'react-native';
import Following from './src/Pages/Following'
import Header from './src/Components/Header/index'
export default function App() {
  return (
    <View style={styles.container}>
    <Header />
    <ScrollView style={styles.container}>
      <Following/>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000014',
    
  },
});
