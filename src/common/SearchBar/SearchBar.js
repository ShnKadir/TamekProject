import React from 'react'

// React Native
import { HStack } from 'native-base'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'

//Style
import { styles } from "./SearchBarStyle"

export default function SearchBar() {

    return (
        <TouchableOpacity>
            <HStack space={"8px"} style={styles.container}>

                <Icon
                    name="search1"
                    type="antdesign"
                    size={22}
                    color="#4173ff"
                />
            </HStack>
        </TouchableOpacity>

    )
}