import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Message</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
        </nav>
    )
}
export { NavBar }