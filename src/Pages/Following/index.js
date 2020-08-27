import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../Components/Header'
import Category from '../../Components/Category';
import StreamList from '../../Components/StreamList';
import Channels from '../../Components/Channels'
function Following(){
  return (
    <View>
      <Text style={styles.title}>Categorias</Text>
      <Category/>
      <StreamList/>
      <Channels/>
    </View>
  );
}
const styles = StyleSheet.create({
  title:{
    fontSize:23,
    color:'#fff',
    marginLeft:8,
    marginBottom:8
  }
})

export default Following;
