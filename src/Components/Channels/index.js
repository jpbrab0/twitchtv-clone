import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import AvatarChannel from '../../images/avatar_channel.png'
import styles from './styles'
const Channel = ({ name,source }) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Image style={styles.avatar} source={source} />
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}
function Channels(){
   return(
       <View>
           <Text style={styles.title}>Canais offline</Text>
           <Channel name="Twitch" source={AvatarChannel} />
           <Channel name="Twitch" source={AvatarChannel} />
           <Channel name="Twitch" source={AvatarChannel} />
           <Channel name="Twitch" source={AvatarChannel} />
       </View>
   )
}
export default Channels