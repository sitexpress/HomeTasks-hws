import {AppStoreType} from "./store";

type initStateType = {
    isLoading: boolean
}

const initState:initStateType = {
    isLoading: false
}

export const loadingReducer = (state:initStateType = initState, action: MainACType): initStateType => { // fix any
    console.log('loadingReducer')
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

// type LoadingActionType = {
//     type: 'CHANGE_LOADING'
//     isLoading: boolean
// }

type MainACType = loadingACType
type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    console.log('loadingAC')
    return {
        type: 'CHANGE_LOADING',
        isLoading,
    }
}
