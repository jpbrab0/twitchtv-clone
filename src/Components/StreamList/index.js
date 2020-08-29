import React from 'react'
import { Text,View,TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import StreamThumbnail from '../../images/stream_thumbnail.jpg'
const Stream = ({ name,title }) => {
    return(
        <TouchableOpacity >
            
            <View style={styles.stream}>

                <Image style={styles.img} source={StreamThumbnail}/>
                <View style={styles.description}>
                    <View style={styles.nickname}>
                        <Image style={styles.icon} source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/8f44df5f-4f0c-404c-a4fd-22609fc90f4a-profile_image-70x70.png' }} />
                        <Text style={styles.text} >{name}</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.text} >{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const StreamList = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Canais ao vivo</Text>
            <Stream  name="jpbrab0" title="Programando o ui clone da twitch!"/>
            <Stream name="jpbrab0" title="Programando o ui clone da twitch!"/>
            <Stream name="jpbrab0" title="Programando o ui clone da twitch!"/>
            <Stream name="jpbrab0" title="Programando o ui clone da twitch!"/>
        </View>
    )
}
export default StreamList