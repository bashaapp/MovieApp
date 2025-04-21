import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import { FONTS, COLORS } from "../Constants"

const AppButton = ({
    contentContainerStyle,
    disabled,
    label,
    labelStyle,
    onPress,
    icon,
    imgSyle
}) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.red,
                ...contentContainerStyle
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <Image 
              source={icon}

              style={{
                 ...imgSyle,
                        
              }}
            />
            <Text style={{ color: COLORS.secondary, ...FONTS.h3, ...labelStyle }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default AppButton;