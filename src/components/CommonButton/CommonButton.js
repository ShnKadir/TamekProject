import React from 'react'

//Style
import { styles } from './CommonButtonStyle'

//Components
import { Text, TouchableOpacity } from 'react-native'
import { HStack } from 'native-base'
import { Icon } from 'react-native-elements';

export default function CommonButton({
    buttonStyle,
    content,
    inverted = false,
    color = '#4173ff',
    disableColor = '#91b6ff',
    onPress,
    isDisabled,
    iconName,
    iconFontType = 'font-awesome-5',
    iconSize = 16
}) {

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={isDisabled}
            style={[
                styles.button,
                inverted
                    ? {
                        backgroundColor: "#fff",
                        borderWidth: 1,
                        borderColor: isDisabled ? disableColor : color
                    }
                    : { backgroundColor: isDisabled ? disableColor : color },
                buttonStyle,
            ]}
        >
            <HStack style={{ alignItems: "center" }}>
                {
                    iconName &&
                    <Icon
                        name={iconName}
                        type={iconFontType}
                        size={iconSize}
                        color={
                            inverted ?
                                color
                                :
                                "#fff"
                        }
                        style={{ marginRight: 8 }}
                    />
                }
                <Text
                    style={[
                        styles.text,
                        inverted
                            ? { color: color }
                            : { color: "#fff" }
                    ]}
                >
                    {content}
                </Text>
            </HStack>
        </TouchableOpacity>
    )
}