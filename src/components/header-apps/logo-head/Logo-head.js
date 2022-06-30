import styles from './Logo-head.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

export const LogoHead = () => {
    return(
        <div className={styles.box_logo}>
            <div className={styles.logo}>
                <Logo />
            </div>
        </div>
    );
}