import { ingredientsURL, baseURL } from '../url';
import { checkResponse } from '../check-response/check-response'

export const
    GET_INGREDIENTS = 'GET_INGREDIENTS',
    GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED',
    GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_FAILED',
     
    INCREASE_INGREDIENT = 'INCREASE_INGREDIENT',
    DECREASE_INGREDIENT = 'DECREASE_INGREDIENT';
 
export const fetchGetIngredients = () => {
    return function(dispatch){

        dispatch({
            type: GET_INGREDIENTS_REQUEST
        }) 

        fetch(`${baseURL}${ingredientsURL}`)
        .then(checkResponse).then( response => {
          dispatch({
            type: GET_INGREDIENTS,
            ingredients: response.data
        })
        })
        .catch( e => {
          dispatch({
            type: GET_INGREDIENTS_FAILED
          })
        }); 
    }
}    