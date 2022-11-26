import React from 'react'
import {pureAddUser} from '../GreetingContainer'

let name: string
const setName = (a: string) => {
    name = a
}

let error: string
const setError = (a: string) => {
    error = a
}

let added: boolean
const addUserCallback = () => {
    added = true
}

beforeEach(() => {
    name = ''
    error = ''
    added = false
})

test('name 1', () => {
    // data
    name = '1'
    //actions
    pureAddUser(name, setError, setName, addUserCallback)
    //expectations
    expect(name).toBe('')
    expect(error).toBe('')
    expect(added).toBe(true)
})

test('name 2', () => {
    // data
    name = ''
    //actions
    pureAddUser(name, setError, setName, addUserCallback)
    //expectations
    expect(name).toBe('')
    expect(error).toBe('Ошибка! Введите имя!')
    expect(added).toBe(false)
})

test('name 3', () => {
    // data
    name = '    '
    //actions
    pureAddUser(name, setError, setName, addUserCallback)
    //expectations
    expect(name).toBe('')
    expect(error).toBe('Ошибка! Введите имя!')
    expect(added).toBe(false)
})
