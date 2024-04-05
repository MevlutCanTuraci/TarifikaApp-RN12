import { View, Text, ScrollView, Linking, Image, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import React from 'react'
import useFetch from '../../hooks/UseFetch/UseFetch';
import Config from 'react-native-config'
import styles from './Details.style'

export default Details = ({ route, navigation }) => {

    const { mealId } = route.params;
    const { data, loading, error } = useFetch(`${Config.API_DETAILS}${mealId}`);

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

    const newData = data.meals[0];

    const handleGotoYoutubeLink = () => {
        Linking.openURL(newData.strYoutube) //meal url
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>

                <View>
                    <Image
                        source={
                            { uri: newData.strMealThumb }
                        }
                        style={styles.image}
                    />
                </View>

                <Text style={styles.meal_title}> {newData.strMeal} </Text>
                <Text style={styles.meal_subtitle}> {newData.strArea} </Text>

                <View style={styles.sperator}>

                </View>


                <View style={{ flex: 1 }}>
                    <Text style={styles.meal_content}>
                        {newData.strInstructions}
                    </Text>
                </View>


                <TouchableOpacity style={styles.btn_goto_youtube} onPress={handleGotoYoutubeLink}>
                    <Text style={styles.btn_text}>
                        Watch on Youtube
                    </Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    )

}