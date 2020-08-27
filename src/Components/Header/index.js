import React from 'react'
import { View, Image,TouchableOpacity, ViewBase } from 'react-native'
import styles from './styles'
import { AntDesign,EvilIcons } from '@expo/vector-icons'; 

const Header = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.img} source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/8f44df5f-4f0c-404c-a4fd-22609fc90f4a-profile_image-70x70.png' }} />
            </TouchableOpacity>
            <View style={styles.viewIcons}>
            <TouchableOpacity>
                <AntDesign name="bells" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="message1" size={24} color="#fff" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <EvilIcons name="search" size={28} color="#fff" style={styles.icon}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header