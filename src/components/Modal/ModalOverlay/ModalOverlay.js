import style from './ModalOverlay.module.css';
 
const ModalOverlay = (props) => {
 
    return (
        <div className={style.ModalOverlay} onClick={props.onClick}>
        </div>
    )
}

export default ModalOverlay;