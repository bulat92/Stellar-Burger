import {

    POST_ORDER_SUCCESS,
    POST_ORDER_REQUEST,
    POST_ORDER_FAILED

} from '../action/fetch-make-order';

const initialState = {
    
    orderNumber: '',
    orderNumberRequest: false,
    orderNumberFailed: false,
    
    orderDetailsOpen: false
}
export const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_ORDER_REQUEST:{
            return{
                ...state,
                orderNumberRequest: true
            }
        }
        case POST_ORDER_SUCCESS:{
            return{
                ...state,
                orderNumberRequest: false,
                orderNumberFailed: false,
                orderNumber: action.number,
                orderDetailsOpen: true
            }
        }
        case POST_ORDER_FAILED:{
            return{
                ...state,
                orderNumberFailed: true
            }
        }
        default:{
            return state
        }
    }
}