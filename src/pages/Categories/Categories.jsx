import React, { useEffect } from 'react'
import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import styles from './Categories.style'
import UseFetch from '../../hooks/UseFetch/UseFetch';
import Config from 'react-native-config';
import Error from '../../components/Error';

const Categories = ({ navigation }) => {

    const {data, loading } =  UseFetch(Config.API_CATEGORIES);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'}  color="#0000ff"/>
            </View>
        )
    }

    if(data.length <= 0 || data == null) {
        return <Error />
    }

    const renderCategory = ({item}) => {
        return <CategoryCard item={item} onPress={categoryCardHandle} />
    }


    const categoryCardHandle = (categoryName) => {
        navigation.navigate('MealsScreen', {categoryName: categoryName})
    }

    return (
        <View style={styles.container}>            
            
            <FlatList
                data={data.categories}
                keyExtractor={data.categories.idCategory}
                renderItem={renderCategory}
            />

        </View>

    );
}

export default Categories;