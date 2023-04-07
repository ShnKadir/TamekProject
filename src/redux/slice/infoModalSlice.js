import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    infoModalData: {
        statusType: null,
        navigation: null,
        title: null,
        description: null,
        initial: null
    },
    infoModalVisibility: false,
}

const infoModalSlice = createSlice({
    name: 'infoModal',
    initialState: initialState,
    reducers: {

        openInfoModal: (state, action) => {
            state.infoModalData = action.payload
            state.infoModalVisibility = true
        },
        closeInfoModal: () => initialState
    }
})

export const {
    openInfoModal,
    closeInfoModal,
} = infoModalSlice.actions

export default infoModalSlice.reducer