import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Menu from '../screens/menu'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainStack from './mainStack'

import { NavigationContainer } from '@react-navigation/native';



const DrawerNav = createDrawerNavigator();
const navigation = ({ navigation }) => {
    return (
        <NavigationContainer >

            <DrawerNav.Navigator
                initialRouteName="mainStack"
                drawerPosition={"right"}
                drawerType={'slide'}
                drawerStyle={{ width: '70%' }}
                screenOptions={{ headerShown: false }}
                drawerContent={({ navigation }) => {
                    return (< Menu navigation={navigation} />)
                }} >
                <DrawerNav.Screen name="mainStack" component={MainStack} />

            </DrawerNav.Navigator>

        </NavigationContainer>
    )

}

export default navigation

const styles = StyleSheet.create({})

