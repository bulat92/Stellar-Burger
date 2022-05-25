import ReactDOM from 'react-dom';
import style from './ModalOverlay.module.css';
import Modal from './Modal/Modal'

const ModalOverlay = (props) => {

    const reactModals = document.getElementById('react-modals');
    return ReactDOM.createPortal(
        <div className={style.background} onClick={props.onClick}>
           <Modal details={props.details} onClick={props.onClick}>
                {props.children}
            </Modal>
        </div>,
        reactModals
    )
}

export default ModalOverlay;