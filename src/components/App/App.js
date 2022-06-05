import React, {useEffect, useState} from "react";
import style from "./App.module.css";
import BurgerConstructor from './BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import Modal from '../Modal/Modal';
import IngredientDetails from '../Modal/ModalOverlay/IngredientDetails/IngredientDetails';
import OrderDetails from '../Modal/ModalOverlay/OrderDetails/OrderDetails';
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../prop-types';
import {BurgerConstructorContext, BurgerIngredientsContext} from './BurgerConstructorContext';
import {OrderIngredients} from '../../utils/data';


const 
  urlGET = 'https://norma.nomoreparties.space/api/ingredients',
  urlPOST = 'https://norma.nomoreparties.space/api/orders';


const App = () => {

 
  const 
    [IngredientDetailModalIsOpen, setIngredientDetailModalIsOpen] = useState(false),
    [orderDetailsModalIsOpen, setOrderDetailsModalIsOpen] = useState(false),
    [fromFetch, setFromFetch] = useState([]),
    [fromFetchOrderInfo, setFromFetchOrderInfo] = useState(false);



  const ToggleIngredientDetailModal = (backProp) => {
    IngredientDetailModalIsOpen ? setIngredientDetailModalIsOpen(false) : setIngredientDetailModalIsOpen(backProp);
  }     
  const escapeKeyFunc = (e) => {
    e.code === 'Escape' && setIngredientDetailModalIsOpen(false);
    e.code === 'Escape' && setOrderDetailsModalIsOpen(false);
  }
  const ToggleOrderDetailsModal = () => {
    sendOrderIngredients();
    setOrderDetailsModalIsOpen(!orderDetailsModalIsOpen)
  }
  
  
  const sendOrderIngredients = () => {

     const idIngredients = OrderIngredients.map((el) => { return el._id});
     
     fetch(urlPOST, {
       method: 'POST',
         headers: {
           "Content-Type": "application/json;charset=utf-8",
         },
         body: JSON.stringify({
           ingredients: idIngredients
         })
     })
     .then(response =>{ 
       if(response.ok === true){
         return response.json()
       }
     }) 
     .then(response => 
         setFromFetchOrderInfo(response)
     )
     .catch(e=> setFromFetchOrderInfo(false));
  }


  useEffect(() => {
    fetch(urlGET)
    .then(response =>{ 
      if(response.ok === true){
        return response.json()
      }
    })
    .then(response => setFromFetch(response.data))
    .catch(e=> setFromFetch(false));

    window.addEventListener('keydown', escapeKeyFunc);

    return() => {
      window.removeEventListener('keydown', escapeKeyFunc);
    }
  },[urlGET])



  

      return (
        setFromFetch &&
        <main style={style.App}>

            {IngredientDetailModalIsOpen && 
              <Modal onClick={ToggleIngredientDetailModal} details={IngredientDetailModalIsOpen}>
                <IngredientDetails details={IngredientDetailModalIsOpen}/>
              </Modal>
            }

            {orderDetailsModalIsOpen && 
                  fromFetchOrderInfo &&
              <Modal onClick={ToggleOrderDetailsModal} details={orderDetailsModalIsOpen}>
                <OrderDetails orderInfo={fromFetchOrderInfo.order.number}/>
              </Modal>
            }

            <BurgerIngredientsContext.Provider value={{fromFetch, ToggleIngredientDetailModal}}>
              <BurgerIngredients/>{/* left */}
            </BurgerIngredientsContext.Provider>

            <BurgerConstructorContext.Provider value = {{ ToggleOrderDetailsModal, OrderIngredients}}>
              <BurgerConstructor/>{/* right */}
            </BurgerConstructorContext.Provider>

        </main>
      );
}
 
/* App.propTypes = {
  fromFetch: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}  */

export default App;