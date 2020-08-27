import React from 'react'
import { View, FlatList,StyleSheet,StatusBar,ScrollView,Text,TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import data from './data'
const CategoryItem = ({ name, source }) => {
    return(
        <TouchableOpacity>
            <Image style={styles.img} source={ source } />
            <Text numberOfLines={0.1} style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}
const Category = () => {
      return (
        <ScrollView horizontal={true}> 
            {data.map((item) => (
                <CategoryItem name={item.name} source={item.source}/>
            ))}
        </ScrollView>
      );
}

export default Category