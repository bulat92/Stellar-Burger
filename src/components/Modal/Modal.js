import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import ModalOverlay from './ModalOverlay/ModalOverlay'

const Modal = (props) => {

    const reactModals = document.getElementById('react-modals');
    return ReactDOM.createPortal(
        <div className={style.background} onClick={props.onClick}>
           <ModalOverlay details={props.details} onClick={props.onClick}>
                {props.children}
            </ModalOverlay>
        </div>,
        reactModals
    )
}

export default Modal;