import { ordersURL, baseURL } from '../url';
import { checkResponse } from '../check-response/check-response'

export const
    POST_ORDER_SUCCESS = 'POST_ORDER',
    POST_ORDER_REQUEST = 'POST_ORDER_REQUEST',
    POST_ORDER_FAILED = 'FAILED';

export const fetchMakeOrder = (idIngredients) => {
 
    return function(dispatch) {
        
        dispatch({
            type: POST_ORDER_REQUEST
        })
        fetch(`${baseURL}${ordersURL}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                ingredients: idIngredients
            })
        })
        .then(checkResponse).then( response => {
            dispatch({
              type: POST_ORDER_SUCCESS,
              number: response.order.number
          })
        })
          .catch( e => {
            dispatch({
                type: POST_ORDER_FAILED
            })
          }); 
      }
  }    