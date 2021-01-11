import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import home from '../screens/home'

import { strings } from '../constants'
const Stack = createStackNavigator();

const mainStack = ({ navigation }) => {
    return (

        <Stack.Navigator initialRouteName={strings.home}>

            <Stack.Screen name={strings.home} component={home} options={{ headerShown: false }} />

        </Stack.Navigator>

    )
}

export default mainStack
