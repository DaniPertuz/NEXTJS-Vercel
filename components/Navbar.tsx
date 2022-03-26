import ActiveLink from './ActiveLink';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            <ActiveLink text="Home" href='/'>Home</ActiveLink>
            <ActiveLink text="About" href='/about'>About</ActiveLink>
            <ActiveLink text="Contact" href='/contact'>Contact</ActiveLink>
        </nav>
    );
}

export default Navbar;