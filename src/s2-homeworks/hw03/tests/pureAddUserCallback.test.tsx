import React from 'react'
import {pureAddUserCallback, UserType} from '../HW3'

let initialState: UserType[]

const setName = (a: UserType[]) => {
    initialState = a
}

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    //actions
    pureAddUserCallback('name', setName, initialState)
    //expectations
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
