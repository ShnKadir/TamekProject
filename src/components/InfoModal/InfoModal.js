import React from "react"

//Style
import { styles } from "./InfoModalStyle"

//Redux
import { useDispatch, useSelector } from "react-redux"


// Components
import { AlertDialog, Text, VStack, HStack } from "native-base"
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'


import { closeInfoModal } from "../../redux/slice/infoModalSlice"
import CommonButton from "../CommonButton/CommonButton"


export default function InfoModal() {

    const dispatch = useDispatch()

    const infoModalData = useSelector(state => state.infoModal.infoModalData)
    const infoModalVisibility = useSelector(state => state.infoModal.infoModalVisibility)

    const onClose = () => {
        if (infoModalData?.navigation?.mainPath) {
            const main = infoModalData?.navigation.mainPath
            const screen = infoModalData?.navigation?.screen
            const paramsScreen = infoModalData?.navigation?.paramsScreen
            const initial = infoModalData?.navigation?.initial

            navigation.navigate(main, screen && { screen: screen, params: paramsScreen && { screen: paramsScreen, initial: initial }, initial: initial })
        }
        dispatch(closeInfoModal())
    }

    return (
        <AlertDialog
            isOpen={infoModalVisibility}
            onClose={onClose}>
            <AlertDialog.Content
                style={styles.alertDialogContent}
            >
                <VStack>
                    <HStack style={styles.headerContainer}>
                        <Text style={styles.headerText}>
                            {infoModalData.title}
                        </Text>
                        <TouchableOpacity
                            onPress={onClose}
                            hitSlop={{ top: 18, bottom: 18, left: 18, right: 18 }}
                        >
                            <Icon
                                name="x"
                                type="feather"
                                size={16}
                                color="#8c8c8c"
                            />
                        </TouchableOpacity>
                    </HStack>

                    <VStack style={styles.contentContainer}>

                        <HStack style={styles.content}>
                            <Icon
                                name="exclamation-circle"
                                type="font-awesome"
                                size={32}
                                color="#DA291C"
                            />
                            <Text style={styles.contentText}>
                                {infoModalData.description}
                            </Text>
                        </HStack>

                        <CommonButton
                            content="Tamam"
                            color={"#007041"}
                            buttonStyle={{ marginTop: 24 }}
                            onPress={onClose}
                        />
                    </VStack>
                </VStack>

            </AlertDialog.Content>
        </AlertDialog >
    )
}