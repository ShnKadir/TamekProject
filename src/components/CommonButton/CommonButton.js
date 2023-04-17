import React from 'react'

//Style
import { styles } from './CommonButtonStyle'

//Components
import { Text, TouchableOpacity } from 'react-native'
import { HStack } from 'native-base'
import { Icon } from 'react-native-elements'

export default function CommonButton({
    buttonStyle,
    content,
    color = '#4173ff',
    disableColor = '#808080',
    onPress,
    isDisabled,
    iconName,
    iconFontType = 'font-awesome-5',
    iconSize = 16,
    disableTextColor = "#808080"
}) {

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={isDisabled}
            style={[
                styles.button,
                { backgroundColor: isDisabled ? disableColor : color, color: disableTextColor },
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
                        color={"#fff"}
                        style={{ marginRight: 8 }}
                    />
                }
                <Text
                    style={[
                        styles.text,
                        isDisabled
                            ? { color: disableTextColor }
                            : { color: "#fff" }
                    ]}
                >
                    {content}
                </Text>
            </HStack>
        </TouchableOpacity>
    )
}