import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    title:{
        fontSize:23,
        marginTop:13,
        margin:6,
        color:'#fff'
    },
    container:{
        flex:1,
        margin:13
    },
    img:{
        width:190,
        height:110,
    },
    stream:{
        margin: 13,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        
    },
    description:{
        marginLeft:13,
    },
    text:{
        width:180,
        lineHeight:23,
        color:'#fff'
    },
    icon:{
        marginRight:12,
        borderColor:'#fff',
        borderWidth:1,
        width:33,
        borderRadius:50,
        height:33,
    },
    nickname:{
        flexDirection:'row',
        alignItems:'center'
    }
    
})
module.exports = styles