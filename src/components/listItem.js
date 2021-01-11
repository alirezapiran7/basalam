import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, Image, View } from 'react-native';
import { color, metrics } from '../constants';
import { IconX, ICON_TYPE } from '../icons';
import Text from './Text'
import { currencyFormat, weightFormat } from '../utils'



export const productItem = ({ item, onPress, isSelected = false }) => {
    return (

        <TouchableOpacity style={{ width: metrics.screenWidth / 2 - 16, marginVertical: 4, marginHorizontal: 4, borderRadius: 8, overflow: "hidden", backgroundColor: color.white }}
            onPress={() => {
                onPress()
            }}>
            <View style={{ height: metrics.screenWidth / 2, }}>
                <Image style={{ backgroundColor: color.white, width: '100%', height: '100%' }} source={{ uri: item.photo.url }} />
                {isSelected && <IconX name={'shopping-cart'} color={color.tint} size={20} style={{ position: 'absolute', start: 8, top: 8,backgroundColor:color.white,borderRadius: 14,overflow: "hidden", padding:4 }} />}
                <View style={{ minWidth: 70, position: 'absolute', end: 0, bottom: 0, backgroundColor: color.transparentWhite, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 4 }}>
                    <Text style={{}}>{`(${item.rating.count})${item.rating.rating}`}</Text>
                    <IconX name={'star'}  color={color.yellow} size={15} /> 
                </View>

            </View>


            <View style={{ width: '100%', flexDirection: 'column', padding: 8 }}>
                <Text style={{ width: '100%', textAlign: 'right', fontSize: 14 }} numberOfLines={2}>{item.name}</Text>
                <Text style={{ width: '100%', textAlign: 'right', color: color.gray, fontSize: 12, height: 50 }} numberOfLines={3}>{item.vendor.name}</Text>

                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ flex: 1, textAlign: 'left', fontSize: 14, }}>{currencyFormat(item.price)}</Text>
                    <Text style={{ textAlign: 'right', fontSize: 14, color: color.gray, }}>{weightFormat(item.weight)}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );
};

// export const Item = ({ item, onPress, isSelected = false, }) => {
//     return (
//         <>

//         </>
//     );
// };





const styles = StyleSheet.create({

});
