// React
import { useState } from 'react'

//React Native
import { HStack } from 'native-base'
import { Platform, TextInput } from 'react-native'

//Style
import { styles } from './InputAreaStyle'

export default function InputArea({
    inputStyle,
    textInputStyle,
    secureTextEntry,
    variant,
    placeholder,
    inputLeftElement,
    inputRightElement,
    isReadOnly,
    value,
    setValue,
    isInvalid,
    multiline,
    numberOfLines,
    keyboardType,
    type,
    cursorColor = '#bfbfbf',
    placeholderTextColor = '#bfbfbf'
}) {

    const [isFocused, setIsFocused] = useState(false)

    return (
        <HStack
            style={[styles.container, inputStyle]}>
            {/* Input Left Element */}
            {inputLeftElement}

            <TextInput
                selectionColor={cursorColor}
                style={[styles.textInput, textInputStyle]}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                editable={!isReadOnly}
                keyboardType={keyboardType}
                variant={variant}
                onChangeText={(text) => setValue(type === "email" ? text.toLowerCase() : text)}
                isInvalid={isInvalid}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                selectTextOnFocus={false}
                multiline={multiline}
                numberOfLines={numberOfLines}
            //disabledInputStyle={{ backgroundColor: "red" }}
            />

            {/* Input Right Element */}
            {inputRightElement}
        </HStack>


    )
}