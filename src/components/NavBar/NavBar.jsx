import { Link, NavLink } from 'react-router-dom'

import s from './NavBar.module.css'

const setActive = ({isActive})=> isActive ? s.activeLink : ''

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' 
                className={setActive}
                >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={setActive} >Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/' className={setActive}>New</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/' className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/' className={setActive}>Setting</NavLink>
            </div>
        </nav>
    )
}
export { NavBar }