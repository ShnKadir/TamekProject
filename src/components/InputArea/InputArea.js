import { useState } from 'react'

//Style
import { styles } from './InputAreaStyle'

//Components
import { HStack } from 'native-base'
import { Platform, TextInput } from 'react-native'

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
    placeholderTextColor = '#bfbfbf',
    onBlur,
    onFocus,
    error
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
                onFocus={onFocus}
                onBlur={onBlur}
                selectTextOnFocus={false}
                multiline={multiline}
                numberOfLines={numberOfLines}
                error={error}
            />

            {/* Input Right Element */}
            {inputRightElement}
        </HStack>


    )
}