import React, {ChangeEvent, FocusEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (string:string) => void, setName: (name:string) => void, addUserCallback: (name:string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    name.trim().length === 0
        ?
        setError('Ошибка! Введите имя!')
        :
        addUserCallback(name)
        setName('')
}

export const pureOnBlur = (name: string, setError: (string:string) => void) => { // если имя пустое - показать ошибку
    !name.trim() && setError('Ошибка! Введите имя!')

}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    e.key === 'Enter' && addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    let lastNewUserName = users.filter(el => el == users[users.length - 1 ]).map(n => n.name)

    const totalUsers = users.length // need to fix
    const lastUserName = users.length == 0 ? ', введи своё имя' : lastNewUserName // need to fix
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
