import React, {FC} from 'react'
import burgerIcon from './burger.svg'
import s from './Header.module.css'
import {useLocation} from 'react-router-dom'
import {PATH} from '../Pages'
import s2 from "../../../s1-main/App.module.css";

type PropsType = {
    handleOpen: () => void
}

export const Header: FC<PropsType> = ({handleOpen}) => {
    // hw5-menu изначально отсутствует, при нажатии на бургер - появляется, при повторном нажатии исчезает
    const location = useLocation()
    const currentPath = location.pathname

    const pageName =
        currentPath === PATH.PRE_JUNIOR
            ? 'Pre-junior'
            : currentPath === PATH.JUNIOR
                ? 'Junior'
                : currentPath === PATH.JUNIOR_PLUS
                    ? 'Junior Plus'
                    : 'Error'
    return (
        <>
            <div id={'hw5-header'} className={s.header}>
                <img
                    src={burgerIcon}
                    id={'hw5-burger-menu'}
                    className={s.burgerMenuIcon}
                    onClick={handleOpen}
                    alt={'open menu'}
                />
                <div className={s.header__title__block}>
                    <span className={s2.hwTitle5}><h4>{pageName}</h4></span>
                    <span className={s2.hwTitle5}>Homework #5</span>
                </div>
            </div>
        </>
    )
}
