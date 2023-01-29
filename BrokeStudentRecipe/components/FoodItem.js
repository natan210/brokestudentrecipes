import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'

import { COLORS, FONTS, SIZES } from "../essentials";

const FoodItem = ({ style, food, onPress }) =>
{
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                padding: 10,
                marginTop: 10,
                backgroundColor: COLORS.gray2,
                ...style
            }}
            onPress={onPress}
        >
            <Image
                source={food.image}
                resizeMode="cover"
                style={{
                    width: 100,
                    height: 100,
                }}
            />

            <View
                style={{
                    width: '65%',
                    paddingHorizontal: 20
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h3
                    }}
                >
                    {food.name}
                </Text>
                <Text
                    style={{
                        color: COLORS.gray,
                        ...FONTS.body5
                    }}
                >
                    {food.calories}
                </Text>
                <Text
                    style={{
                        color: COLORS.gray,
                        ...FONTS.body5
                    }}
                >
                    {food.lastMade}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default FoodItem