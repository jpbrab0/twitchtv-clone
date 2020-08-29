import React from 'react'
import { ScrollView,Text,TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import data from './data'
const CategoryItem = ({ name, source }) => {
    return(
        <TouchableOpacity>
            <Image style={styles.img} source={ source } />
            <Text numberOfLines={1} style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}
const Category = () => {
      return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
            {data.map((item, index) => (
                <CategoryItem name={item.name} source={item.source} key={index}/>
            ))}
        </ScrollView>
      );
}

export default Category