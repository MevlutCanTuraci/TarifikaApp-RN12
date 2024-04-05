import React from 'react'
import { View, Text, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import styles from './Meals.style'
import useFetch from '../../hooks/UseFetch/UseFetch';
import Config from 'react-native-config';
import MealCard from '../../components/MealCard';
import Error from '../../components/Error';

export default Meals = ({ route, navigation }) => {

    const { categoryName } = route.params;
    const { data, loading, error } = useFetch(`${Config.API_MEALS}${categoryName}`);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color="#0000ff" />
            </View>
        )
    }

    if (error) {
        return <Error />
    }

    if (data.meals == null) {
        return <Error />
    }

    const mealCardHandle = (mealId) => {
        navigation.navigate('DetailsScreen', { mealId });
    }

    const renderMeal = ({ item }) => {
        return (
            <MealCard meal={item} onPress={mealCardHandle} />
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList
                data={data.meals}
                keyExtractor={data.meals.idMeal}
                renderItem={renderMeal}
            />
        </SafeAreaView>
    )

}