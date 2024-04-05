import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details';

const Stack = createStackNavigator();

const Router = () => {

    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name='CategoriesScreen' component={Categories}
                    options={{
                        title: 'Categories',
                        headerTitleStyle: {
                            color: '#ffa500'
                        },
                        headerTintColor: '#ffa500'
                    }}
                />

                <Stack.Screen name='MealsScreen' component={Meals}
                    options={{
                        title: 'Meals',
                        headerTitleStyle: {
                            color: '#ffa500'
                        },
                        headerTintColor: '#ffa500'
                    }}
                />

                <Stack.Screen name='DetailsScreen' component={Details}
                    options={{
                        title: 'Details',
                        headerTitleStyle: {
                            color: '#ffa500'
                        },
                        headerTintColor: '#ffa500'
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )

}


export default Router;