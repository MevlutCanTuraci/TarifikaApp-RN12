import React from 'react'
import { View, Image, Text } from 'react-native';
import styles from './MealCard.style'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default MealCard = ({ meal, onPress }) => {

    return (

        <TouchableWithoutFeedback onPress={() => onPress(meal.idMeal)}>

            <View style={styles.container}>
                <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> {meal.strMeal} </Text>
                </View>
            </View>

        </TouchableWithoutFeedback>

    )

}