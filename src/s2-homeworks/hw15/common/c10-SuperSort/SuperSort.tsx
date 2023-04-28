import React from 'react'
import s from '../../HW15.module.css'

import basic from '../../img/basic.png'
import basicUp from '../../img/basic-up.png'
import basicDown from '../../img/basic-down.png'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ""

    // return up // исправить
    else return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    // const icon = sort === down
    //     ? downIcon
    //     : sort === up
    //         ? upIcon
    //         : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                className={s.superSort}
                src={
                sort === '' ?
                    basic
                    : sort === down ?
                        basicDown
                        : sort === up ?
                            basicUp : ''
            }
            />
        </span>
    )
}

export default SuperSort
