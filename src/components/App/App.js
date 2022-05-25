import React, {useEffect, useState} from "react";
import style from "./App.module.css";
import BurgerConstructor from './BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import IngredientDetails from '../ModalOverlay/Modal/IngredientDetails/IngredientDetails';
import OrderDetails from '../ModalOverlay/Modal/OrderDetails/OrderDetails';
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../prop-types';

const App = () =>{
 
  const [IngredientDetailModalIsOpen, setModalIsOpen] = useState(false),
        [orderDetailsModalIsOpen, setOrderDetailsModalIsOpen] = useState(true),
        [isLoading, setIsLoading] = useState(true),
        [hasError, setHasError] = useState(false),
        [arr, setArr] = useState([]),
        [url, setUrl] = useState('https://norma.nomoreparties.space/api/ingredients');



  const IngredientDetailModalIsOpenFunc = (backProp) => {
    IngredientDetailModalIsOpen ? setModalIsOpen(false) : setModalIsOpen(backProp);
  }     
  const escapeKeyFunc = (e) => {
    e.code === 'Escape' && setModalIsOpen(false);
  }
  const OrderDetailsModalIsOpenFunc = () => {
    setOrderDetailsModalIsOpen(!orderDetailsModalIsOpen)
  }


  

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
    .then(response => response.json())
    .then(response => setArr(response.data), setIsLoading(false))
    .catch(e=> setHasError(true), setIsLoading(false));

    window.addEventListener('keydown', escapeKeyFunc);
  },[url])

      return (
        !isLoading &&
        !hasError &&
        <main style={style.App}>
            {IngredientDetailModalIsOpen && 
              <ModalOverlay onClick={IngredientDetailModalIsOpenFunc} details={IngredientDetailModalIsOpen}>
                <IngredientDetails details={IngredientDetailModalIsOpen}/>
              </ModalOverlay>
            }
            {orderDetailsModalIsOpen && 
              <ModalOverlay onClick={OrderDetailsModalIsOpenFunc} details={orderDetailsModalIsOpen}>
                <OrderDetails details={orderDetailsModalIsOpen}/>
              </ModalOverlay>
            }
            <BurgerIngredients arr = {arr} onClick={IngredientDetailModalIsOpenFunc}/>{/* left */}
            <BurgerConstructor onClick={OrderDetailsModalIsOpenFunc} />{/* right */}
        </main>
      );
}
 
BurgerIngredients.propTypes = {
  arr: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
} 

export default App;

/* react-modals */