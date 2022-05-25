import style from './Modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
 

const Modal = (props) => {

    const Stop = (e) => {
        e.stopPropagation()
    }

    return (
        <div className={style.Modal} onClick={Stop}>
            <div className={style.modalHeader}>
                <h2 className={style.h2}>{ props.details.name && 'Детали ингредиента'}</h2>
                <CloseIcon type="primary" onClick={props.onClick}/>
            </div>
            {props.children}
        </div>
    )
}

export default Modal;