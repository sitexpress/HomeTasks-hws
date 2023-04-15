import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import axios, {AxiosResponse} from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import {useSearchParams} from 'react-router-dom'
import s from "./HW14.module.css";

/*
* 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput 1
* 2 - дописать функцию sendQuery в HW14 1
* 3 - дописать функцию onChangeText в HW14 1
* 4 - сделать стили в соответствии с дизайном 1
* 5 - добавить HW14 в HW5/pages/JuniorPlus 1
* */

const getTechs = (find: string) => {
    return axios
        .get<{ techs: string[] }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test2',
            {params: {find}}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<string[]>([])

    const sendQuery = (value: string) => {
        setLoading(true)
        getTechs(value)
            .then((res) => {
                // делает студент
                const response = res as AxiosResponse<{ techs: string[] }>
                // сохранить пришедшие данные
                setLoading(true)
                setTechs(response.data.techs)
                // console.log(res)
            })
        setLoading(false)
    }

    const onChangeText = (value: string) => {
        setFind(value)
        // делает студент

        // добавить/заменить значение в квери урла
        // setSearchParams(
        setSearchParams(find)
        //
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery(params.find || '')
        setFind(params.find || '')
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
        <div id={'hw14'}>
            <div className={s2.hwTitle}>Homework #14</div>
            <button onClick={() => sendQuery('')}>Button sendQuery</button>
            <div className={s2.hw}>
                <div className={s.input__container}>

                </div>

                <SuperDebouncedInput
                    id={'hw14-super-debounced-input'}
                    value={find}
                    onChangeText={onChangeText}
                    onDebouncedChange={sendQuery}
                />

                <div id={'hw14-loading'} className={s.loading}>
                    {isLoading ? '...ищем' : <br/>}
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

export default HW14
