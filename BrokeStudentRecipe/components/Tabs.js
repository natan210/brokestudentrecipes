import React from 'react';
import {
    View,
    Image
} from 'react-native';

import { COLORS } from "../essentials";

const TabIcon = ({ icon }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 80,
                width: 50
            }}
        >
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? COLORS.blue : COLORS.blue
                }}
            />
        </View>
    )
}

export default TabIcon;