import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { color } from '../constants'
import { IconX, ICON_TYPE } from '../icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import { productItem } from '../components/listItem'
import Text from '../components/Text'
import { decrementItemCart, generalGet, incrementItemCart } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { DrawerActions } from '@react-navigation/native'
import Basalam from '../assets/icons/Basalam.svg'

const home = ({ navigation }) => {

    const insets = useSafeAreaInsets()
    const cartCount = useSelector(state => state.sotre.cartCount)
    const cart = useSelector(state => state.sotre.cart)
    const items = useSelector(state => state.sotre.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(generalGet({ result: 'items', body: { "query": "{productSearch(size: 20) {products {id name photo(size: LARGE) { url } vendor { name } weight price rating { rating count: signals } } } }" } }))
        return () => { }
    }, [])

    const cartContains = (item) => {
        let res = false
        cart.map(element => {
            if (element.id === item.id) {
                res = true
            }
        })
        return res
    }



    return (
        <View style={{ flex: 1, backgroundColor: color.grey100 }}>
            <View style={{ width: '100%', backgroundColor: color.white, height: 55, marginTop: insets.top, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16 }}>
                <TouchableOpacity>
                    <IconX name={'handbag'} size={25} origin={ICON_TYPE.SimpleLineIcons} />
                    {cartCount !== 0 && <Text style={{ minWidth: 15, minHeight: 15, position: 'absolute', top: 0, start: 0, backgroundColor: color.tint, borderRadius: 8, overflow: "hidden", color: color.white, fontSize: 8, textAlign: 'center' }}>{cartCount}</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 8 }}>
                    <IconX name={'magnifier'} size={25} origin={ICON_TYPE.SimpleLineIcons} />
                </TouchableOpacity>
                <View style={{ flex: 1 }} />
                <Image source={require('../assets/icons/basalam.png')} style={{ height: 20 ,width:100}} resizeMode='contain' />

                <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
                    <IconX name={'menu'} size={25} origin={ICON_TYPE.SimpleLineIcons} />
                </TouchableOpacity>
            </View>

            <FlatList
                style={{ flex: 1, margin: 8 }}
                data={items}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={true}
                numColumns={2}
                renderItem={({ item }) => (
                    productItem({
                        item: item, onPress: () => {
                            if (!cartContains(item))
                                dispatch(incrementItemCart(item))
                            else
                                dispatch(decrementItemCart(item))
                        }, isSelected: cartContains(item)
                    }))
                } />

        </View >
    )
}

export default home
