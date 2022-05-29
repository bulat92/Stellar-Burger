import React, {useEffect, useState} from "react";
import style from "./App.module.css";
import BurgerConstructor from './BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import Modal from '../Modal/Modal';
import IngredientDetails from '../Modal/ModalOverlay/IngredientDetails/IngredientDetails';
import OrderDetails from '../Modal/ModalOverlay/OrderDetails/OrderDetails';
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../prop-types';

const url = 'https://norma.nomoreparties.space/api/ingredients';

const App = () =>{
 
  const [IngredientDetailModalIsOpen, setIngredientDetailModalIsOpen] = useState(false),
        [orderDetailsModalIsOpen, setOrderDetailsModalIsOpen] = useState(false),
        [isLoading, setIsLoading] = useState(true),
        [hasError, setHasError] = useState(false),
        [fromFetch, setFromFetch] = useState([]);



  const ToggleIngredientDetailModal = (backProp) => {
    IngredientDetailModalIsOpen ? setIngredientDetailModalIsOpen(false) : setIngredientDetailModalIsOpen(backProp);
  }     
  const escapeKeyFunc = (e) => {
    e.code === 'Escape' && setIngredientDetailModalIsOpen(false);
    e.code === 'Escape' && setOrderDetailsModalIsOpen(false);
  }
  const ToggleOrderDetailsModal = () => {
    setOrderDetailsModalIsOpen(!orderDetailsModalIsOpen)
  }


  useEffect(() => {
    setIsLoading(true)
    fetch(url)
    .then(response =>{ 
      if(response.ok === true){
        return response.json()
      }
    })
    .then(response => setFromFetch(response.data), setIsLoading(false))
    .catch(e=> setHasError(true), setIsLoading(false));

    window.addEventListener('keydown', escapeKeyFunc);

    return() => {
      window.removeEventListener('keydown', escapeKeyFunc);
    }
  },[url])



  

      return (
        !isLoading &&
        !hasError &&
        <main style={style.App}>
            {IngredientDetailModalIsOpen && 
              <Modal onClick={ToggleIngredientDetailModal} details={IngredientDetailModalIsOpen}>
                <IngredientDetails details={IngredientDetailModalIsOpen}/>
              </Modal>
            }
            {orderDetailsModalIsOpen && 
              <Modal onClick={ToggleOrderDetailsModal} details={orderDetailsModalIsOpen}>
                <OrderDetails details={orderDetailsModalIsOpen}/>
              </Modal>
            }
            <BurgerIngredients arr = {fromFetch} onClick={ToggleIngredientDetailModal}/>{/* left */}
            <BurgerConstructor onClick={ToggleOrderDetailsModal} />{/* right */}
        </main>
      );
}
 
App.propTypes = {
  fromFetch: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
} 

export default App;

/* react-modals */