import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { color } from '../constants'
import { IconX, ICON_TYPE } from '../icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import { productItem } from '../components/listItem'
import Text from '../components/Text'
import { decrementItemCart, generalGet, incrementItemCart } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { DrawerActions } from '@react-navigation/native'

// import Basalam from '../assets/icons/Basalam'

const mocData = [
    {
        id: 1,
        title: 'چای قلم لاهیجان 900 گرمی',
        description: 'چای لاهیجان ارسال رایگان سراسر ایران',
        weight: 1200,
        price: 2000000,
        rate: 2.8,
        commentCount: 6,
        image: 'https://statics.basalam.com/public/users/vlZAL/2008/AEZsnPos6a0tvBExWrRScySGDndjVCOUtqfTltn4.jpeg_512X512X70.jpeg'

    },
    {
        id: 2,
        title: 'چای قلم 900 گرمی بهار 99',
        description: 'چای قیصر',
        weight: 1200,
        price: 2000000,
        rate: 2.8,
        commentCount: 6,
        image: 'https://statics.basalam.com/public/users/76n7O/2006/sXygsT4dRofOVKfnVxYyERkW8U0qKGabb0TgmBJ2.jpeg_512X512X70.jpeg'

    },
    {
        id: 3,
        title: 'دمنوش سیب سالمین',
        description: 'فروشگاه سالمین ارسال رایگان',
        weight: 1200,
        price: 2000000,
        rate: 2.8,
        commentCount: 6,
        image: 'https://statics.basalam.com/public/users/ELv/2002/VP5OcYWdKiS2NkB6Eb0XblXCzsHGittTII6zqhZy.jpeg_512X512X70.jpeg'

    },
    {
        id: 4,
        title: 'غنچه گل محمدی سالمین',
        description: 'فروشگاه سالمین ارسال رایگان',
        weight: 1200,
        price: 2000000,
        rate: 2.8,
        commentCount: 6,
        image: 'https://statics.basalam.com/public/users/ELv/2002/G1EDc9Maa0H33lH8ZmObf7MEdEZBHWN0Gbqrk3aO.jpeg_512X512X70.jpeg'

    },
    {
        id: 5,
        title: 'چای سرگل(1000گرمی) بهاره 99 لاهیجان',
        description: 'چای بهارستان لاهیجان',
        weight: 1200,
        price: 2000000,
        rate: 2.8,
        commentCount: 6,
        image: 'https://statics.basalam.com/public/users/ngYoD/2009/uzbruELzCvhjnycj59njM8mX73NjX3iIb0kqDcb2.jpeg_512X512X70.jpeg'

    }
]

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
                    {cartCount !== 0 && <Text style={{ minWidth: 15, minHeight: 15, position: 'absolute', top: 0, start: 0, backgroundColor: color.tint, borderRadius: 8, overflow: "hidden", color: color.white, fontSize: 12, textAlign: 'center' }}>{cartCount}</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 8 }}>
                    <IconX name={'magnifier'} size={25} origin={ICON_TYPE.SimpleLineIcons} />
                </TouchableOpacity>
                <View style={{ flex: 1 }} />

                <TouchableOpacity onPress={()=>{navigation.dispatch(DrawerActions.toggleDrawer())}}>
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
