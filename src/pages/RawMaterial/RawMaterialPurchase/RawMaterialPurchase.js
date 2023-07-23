import { View, Text } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { MENU_NAV } from '../../../navigations/constants';
import { Icon } from 'react-native-elements';

export default function RawMaterialPurchase() {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate(MENU_NAV.RAW_CREATE_MATERIAL)}>
          <Icon
            name="plus"
            type="antdesign"
            size={22}
            color="#007041"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>RawMaterialPurchase</Text>
    </View>
  )
}