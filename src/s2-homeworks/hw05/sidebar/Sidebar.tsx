import React, {FC} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {

    // const location = useLocation()
    // const currentPath = location.pathname
    // console.log('currentPath:',currentPath)
    console.log(open)
    const sidebarClass = s.sidebar + ' ' + `${open ? s.open : ''}`
    const sidebarNavBlock = s.nav_block + ' ' + `${open ? s.nav_block : ''}`

    // const sidebarNavLink = s.nav_link + ' ' + `${currentPath === '/pre-junior' ? s.nav_link_active :
    //                                         currentPath === '/junior' ? s.nav_link_active :
    //                                             currentPath === '/junior-plus' ? s.nav_link_active : ''}`

    // const setAction = ({isActive}) => isActive ? s.nav_link + ' ' + s.nav_link_active : s.nav_link

    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>

                <nav id={'hw5-menu'} className={sidebarNavBlock}>
                    <NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.nav_link + ' ' + s.nav_link_active : s.nav_link}
                        // className={sidebarClass} // делает студент
                    >
                        Pre-junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.nav_link + ' ' + s.nav_link_active : s.nav_link}
                        // className={sidebarClass} // делает студент
                    >
                        Junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                        onClick={handleClose}
                        className={({isActive}) => isActive ? s.nav_link + ' ' + s.nav_link_active : s.nav_link}
                        // className={sidebarClass} // делает студент
                    >
                        Junior Plus
                    </NavLink>
                </nav>
            </aside>
        </>
    )
}
