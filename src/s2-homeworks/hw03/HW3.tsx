import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - описать тип 1
* 2 - указать нужный тип в useState с users 1
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами (1/x)
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов 1
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error 1
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback 1
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами (1/x)
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName) 1
* 9 - в файле Greeting.tsx дописать типизацию пропсов 1
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки 1
* 11 - сделать стили в соответствии с дизайном 1
* */

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

export const pureAddUserCallback = (name: string, setUsers:(name:UserType[]) => void, users: UserType[]) => { // need to fix any
    const user = { // need to fix
        _id: v1(), name: name
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    console.log('users:', users)

    const addUserCallback = (name: string) => { // need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
