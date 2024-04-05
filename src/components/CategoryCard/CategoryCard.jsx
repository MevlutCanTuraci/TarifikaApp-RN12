import React, { useEffect } from 'react'
import { Image, View, Text } from 'react-native';
import styles from './Category.style'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CategoryCard = ({ item, onPress }) => {

    return (
        <TouchableWithoutFeedback onPress={() => onPress(item.strCategory)}>

            <View style={styles.container}>
                <Image source={{ uri: item.strCategoryThumb }} style={styles.image} />
                <Text style={styles.title}>{item.strCategory} </Text>
            </View>

        </TouchableWithoutFeedback>
    )

}

export default CategoryCard;