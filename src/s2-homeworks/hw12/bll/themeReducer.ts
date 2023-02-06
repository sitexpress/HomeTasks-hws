
type PropsStateType = {
    themeId:number
}
const initState = {
    themeId: 1,
}

export const themeReducer = (state:PropsStateType = initState, action: changeThemeIdACType): PropsStateType => { // fix any
    console.log('themeReducer:', action.id)
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state, themeId:action.id
            }
        default:
            return state
    }
}


type changeThemeIdACType = ReturnType<typeof changeThemeId>
type returnOfChangeThemeIdAC = {
    type: string
    id:number
}
export const changeThemeId = (id: number): returnOfChangeThemeIdAC => ({ type: 'SET_THEME_ID', id }) // fix any
