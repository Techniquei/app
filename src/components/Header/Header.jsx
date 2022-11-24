import s from './Header.module.css'

const Header = () => {
    const logoSrc = 'https://png-images.ru/wp-content/uploads/2015/02/car_logo_PNG1657.png'
    return (
        <header className={s.header}>
            <img src={logoSrc} alt='logo'></img>
        </header>
    )
}
export { Header }