import React from 'react'

//Style
import { styles } from "./SearchBarStyle"

//Navigation
import { useNavigation } from '@react-navigation/native';

//Component
import { Text } from 'react-native'
import { HStack } from 'native-base';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

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