import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from '../../common/Enums'

const initialState = {
    recordStatusData: null,    
    
    recordApproveRejectControlApiStatus:API_STATUS.NONE
}

const recordApproveRejectControlSlice = createSlice({
    name: 'recordApproveStatusControl',
    initialState: initialState,
    reducers: {
        clearRecordApproveStatusControlSlice: () => initialState,

        postRecordApproveRejectControlRequest: state => {
            state.recordApproveRejectControlApiStatus = API_STATUS.REQUEST
        },
        postRecordApproveRejectControlSuccess: (state, action) => {
            state.recordStatusData = action.payload
            state.recordApproveRejectControlApiStatus = API_STATUS.SUCCESS
        },
        postRecordApproveRejectControlFailure: (state, action) => {
            state.recordApproveRejectControlApiStatus = API_STATUS.FAILURE
        }
    }
})

// Action creators are generated for each case reducer function
export const {

    clearRecordApproveStatusControlSlice,
    postRecordApproveRejectControlRequest,
    postRecordApproveRejectControlSuccess,
    postRecordApproveRejectControlFailure

} = recordApproveRejectControlSlice.actions

export default recordApproveRejectControlSlice.reducer