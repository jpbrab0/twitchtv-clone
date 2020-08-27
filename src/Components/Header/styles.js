import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        
        padding:18,   
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    img:{
        borderColor:'#fff',
        borderWidth:1,
        width:53,
        borderRadius:50,
        height:53,
    },
    viewIcons:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    icon:{
        marginLeft:13
    }
})
module.exports = styles
