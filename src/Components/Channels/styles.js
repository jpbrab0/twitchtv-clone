import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        marginTop:8,
        marginBottom:13
    },
    title:{
        color:'#fff',
        fontSize:23,
        marginBottom:23
    },
    text:{
        marginLeft:23,
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
    },
    avatar:{
        width:33,
        height:33,
        borderRadius:50,
        borderColor:'#fff'
    }
})
module.exports = styles