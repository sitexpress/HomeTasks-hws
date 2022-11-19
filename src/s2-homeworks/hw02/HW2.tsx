import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType 1
* 2 - указать нужный тип для defaultAffairs 1
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами 1
* 4 - выполнить пункт 3 для функции deleteAffair 1
* 5 - указать нужный тип в useState с affairs 1
* 6 - дописать тип и логику функции deleteAffairCallback 1
* 7 - в файле Affairs.tsx дописать типизацию пропсов 1
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow 1
* 9 - в файле Affair.tsx дописать типизацию пропсов 1
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать 1
* 11 - в файле Affair.tsx отобразить приходящие данные 1
* */

// types
export type AffairPriorityType = Array<AffairType> // need to fix any

export type AffairType = {
    _id: number // need to fix any
    name: string // need to fix any
    priority: string
}
export type FilterType = 'all' | 'low' | 'high' | 'middle'

// constants
const defaultAffairs: AffairPriorityType = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

console.log('defaultAffairs:', defaultAffairs)

// pure helper functions
export const filterAffairs = (affairs: AffairPriorityType, filter: FilterType): AffairPriorityType => { // need to fix any
    switch (filter) {
        case 'all':
            return affairs
        break
        case 'low':
            return affairs.filter(el => el.priority === 'low')
        break
        case 'high':
            return affairs.filter(el => el.priority === 'high')
        break
        case 'middle':
            return affairs.filter(el => el.priority === 'middle')
        break
    }
}

export const deleteAffair = (affairs: AffairPriorityType, _id: number): AffairPriorityType => { // need to fix any
    return affairs.filter(el => el._id !== _id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairPriorityType>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')



    const filteredAffairs = filterAffairs(affairs, filter)
    console.log('filteredAffairs:', filteredAffairs)
    const deleteAffairCallback = (_id: number) => { // need to fix any
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
