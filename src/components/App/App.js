import React, {useEffect, useState} from "react";
import style from "./App.module.css";
import BurgerConstructor from './BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import Modal from '../Modal/Modal';
import IngredientDetails from '../Modal/ModalOverlay/IngredientDetails/IngredientDetails';
import OrderDetails from '../Modal/ModalOverlay/OrderDetails/OrderDetails';
import PropTypes from 'prop-types';
import {ingredientPropType} from '../../prop-types';
import {BurgerConstructorContext, BurgerIngredientsContext} from '../../services/BurgerContext';
import {OrderIngredients} from '../../utils/data';
import {urlGET} from '../../services/TotalConsts';
import {fetchFunc} from '../../fetch/fetchFunc';


const App = () => {
 
  const 
    [IngredientDetailModalIsOpen, setIngredientDetailModalIsOpen] = useState(false),
    [orderDetailsModalIsOpen, setOrderDetailsModalIsOpen] = useState(false),
    [fromFetch, setFromFetch] = useState([]),
    [fromFetchOrderNumber, setFromFetchOrderInfo] = useState(null);



  const ToggleIngredientDetailModal = (backProp) => {
    IngredientDetailModalIsOpen ? setIngredientDetailModalIsOpen(false) : setIngredientDetailModalIsOpen(backProp);
  }     
  const ToggleOrderDetailsModal = () => {
    fetchFunc(OrderIngredients).then(number => setFromFetchOrderInfo(number));
    setOrderDetailsModalIsOpen(!orderDetailsModalIsOpen)
  }
  
  useEffect(() => {
    fetch(urlGET)
    .then(response =>{ 
      if(response.ok === true){
        return response.json()
      } else {
        throw new Error("Ошибка HTTP: " + response.status);
      }
    })
    .then(response => setFromFetch(response.data))
    .catch(e=> setFromFetch(false));
  },[urlGET])



  

      return (
        setFromFetch &&
        <main style={style.App}>

            {IngredientDetailModalIsOpen && 
              <Modal 
                onClick={ToggleIngredientDetailModal} 
                details={IngredientDetailModalIsOpen} 
                setIngredientDetailModalIsOpen={setIngredientDetailModalIsOpen}
                setOrderDetailsModalIsOpen={setOrderDetailsModalIsOpen}
                >
                  <IngredientDetails details={IngredientDetailModalIsOpen}/>
              </Modal>
            }

            {orderDetailsModalIsOpen && 
                  fromFetchOrderNumber &&
              <Modal 
                onClick={ToggleOrderDetailsModal} 
                details={orderDetailsModalIsOpen}
                setIngredientDetailModalIsOpen={setIngredientDetailModalIsOpen}
                setOrderDetailsModalIsOpen={setOrderDetailsModalIsOpen}
                >
                  <OrderDetails orderInfo={fromFetchOrderNumber} />
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