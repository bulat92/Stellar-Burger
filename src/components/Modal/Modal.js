import ReactDOM from 'react-dom';
import {useEffect} from 'react';
import style from './Modal.module.css';
import ModalOverlay from './ModalOverlay/ModalOverlay';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = (props) => {


    const escapeKeyFunc = (e) => {
        e.code === 'Escape' && props.setIngredientDetailModalIsOpen(false);
        e.code === 'Escape' && props.setOrderDetailsModalIsOpen(false);
      }

    useEffect(() => {
        window.addEventListener('keydown', escapeKeyFunc);
    
        return() => {
          window.removeEventListener('keydown', escapeKeyFunc);
        }
      },[])



    const reactModals = document.getElementById('react-modals');
    return ReactDOM.createPortal(<>
                <div className={style.Modal}>
                    <div className={style.modalHeader}>
                        <h2 className={style.h2}>{ props.details.name && 'Детали ингредиента'}</h2>
                        <CloseIcon type="primary" onClick={props.onClick}/>
                    </div>
                        {props.children}
                </div>
            <ModalOverlay onClick={props.onClick} />
        </>,
        reactModals
    )
}

export default Modal;