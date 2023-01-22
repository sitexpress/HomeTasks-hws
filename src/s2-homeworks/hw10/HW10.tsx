import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'
import s from './HW10.module.css'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику 1
* 2 - получить isLoading из редакса 1
* 3 - дописать функцию setLoading 1
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент

    const isLoading = useSelector<AppStoreType, boolean>((state) => state.loading.isLoading)
    const dispatch = useDispatch()
    console.log('isLoading state',isLoading)

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        console.log('clicked')
        // dispatch
            const action = loadingAC(true)
            dispatch(action)
        // setTimeout
        setTimeout(() => {
            const action = loadingAC(false)
            dispatch(action)
        }, 1500)
    }

    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>
                {isLoading && isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                        className={s.button}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    )
}

export default HW10
