const urlGET = 'https://norma.nomoreparties.space/api/ingredients';

export const
    GET_INGREDIENTS = 'GET_INGREDIENTS',
    GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED',
    GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_FAILED',
    
    SET_INGREDIENTS_FOR_DETAILS = 'SET_INGREDIENTS_FOR_DETAILS',
    INGREDIENTS_DETAILS_MUST_BE_CLOSED = 'INGREDIENTS_DETAILS_MUST_BE_CLOSED',

    INCREASE_INGREDIENT = 'INCREASE_INGREDIENT',
    DECREASE_INGREDIENT = 'DECREASE_INGREDIENT';
 
export const fetchGetIngredients = () => {
    return function(dispatch){

        dispatch({
            type: GET_INGREDIENTS_REQUEST
        }) 

        fetch(urlGET)
        .then(response => { 
          if(response.ok === true){
            return response.json();
          }else{
            dispatch({
                type: GET_INGREDIENTS_FAILED
            })
            throw new Error("Ошибка HTTP: " + response.status);
          }
        }).then( response => {
          dispatch({
            type: GET_INGREDIENTS,
            ingredients: response.data
        })
        })
        .catch(); 
    }
}    