import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function ComingSoon(){
   return(
       <View style={styles.container}>
           <Text>Em breve</Text>
       </View>
   )
}
export default ComingSoon

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})