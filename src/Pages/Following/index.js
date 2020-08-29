import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../Components/Header'
import Category from '../../Components/Category';
import StreamList from '../../Components/StreamList';
import Channels from '../../Components/Channels';
import styles from './styles'
function Following(){
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView >
        
        <Text style={styles.title}>Categorias</Text>
        <Category/>
        <StreamList/>
        <Channels/>
      </ScrollView>
    </View>
    
  );
}


export default Following;
