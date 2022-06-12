import { 
ADD_INGREDIENT,
DELETE_INGREDIENT,
ADD_BUN
} from '../action/BurgerConstructor';
 
const initialState = {
    OrderIngredients: [],

    bun: {"_id":"60d3b41abdacab0026a733c6",
    "name":"Краторная булка N-200i",
    "type":"bun",
    "proteins":80,
    "fat":24,
    "carbohydrates":53,
    "calories":420,
    "price":1255,
    "image":"https://code.s3.yandex.net/react/code/bun-02.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
    "__v":0}
};

export const BurgerConstructorReducer = (state = initialState, action) => {
 
    switch(action.type){
          case ADD_INGREDIENT:{
            return{
                ...state,
                OrderIngredients: [...state.OrderIngredients,  action.item],
                 
            }
        }  
        case ADD_BUN:{
            return{
                ...state, 
                bun: action.item  
            }
        }
        case DELETE_INGREDIENT:{
            return{
                ...state,
                OrderIngredients: [...state.OrderIngredients.filter((el, index) => index != action.index )] 
            }
        }
        default:{
            return{...state}
        }
    }
}