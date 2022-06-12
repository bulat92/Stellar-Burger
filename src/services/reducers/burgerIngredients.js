import {
    GET_INGREDIENTS,
    GET_INGREDIENTS_FAILED, 
    GET_INGREDIENTS_REQUEST,

    SET_INGREDIENTS_FOR_DETAILS,
    INGREDIENTS_DETAILS_MUST_BE_CLOSED,

    INCREASE_INGREDIENT,
    DECREASE_INGREDIENT

} from '../action/burgerIngredients';



const initialState = {
   
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
 
    IngredientDetailsOpen: false
}

export const burgersReducer = (state = initialState, action) => {
     
    switch(action.type){
        case GET_INGREDIENTS_REQUEST: {
            return{
                ...state,
                ingredientsRequest: true
            }
        }
        case GET_INGREDIENTS: {
            return{
                ...state,
                ingredientsRequest: false,
                ingredients: action.ingredients,
                ingredientsFailed: false
            }
        }
        case GET_INGREDIENTS_FAILED: {
            return{
                ...state,
                ingredientsRequest: true
            }
        }
        case SET_INGREDIENTS_FOR_DETAILS: {
            return{
                ...state,
                IngredientDetailsOpen: action.details
            }
        }
        case INGREDIENTS_DETAILS_MUST_BE_CLOSED: {
            return{
                ...state,
                IngredientDetailsOpen: false
            }
        }
        case INCREASE_INGREDIENT: {
            return{
                ...state,
                ingredients: [...state.ingredients].map(item =>
                    item.id === action.id ? { ...item, __v: ++item.__v } : item
                  )
                
            }
        }
        case DECREASE_INGREDIENT: {
            return{
                ...state,
                ingredients: [...state.ingredients.map( el => {if(el._id === action.id){ return [...el, el.count -= 1]}else{return el} })]
            }
        }
        default: {
             return state;
        }
    }
}