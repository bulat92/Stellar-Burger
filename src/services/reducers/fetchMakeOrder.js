import {

    POST_ORDER_SUCCESS,
    POST_ORDER_REQUEST,
    POST_ORDER_FAILED,

    ORDER_MODAL_MUST_BE_CLOSED

} from '../action/fetchMakeOrder';

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
        case ORDER_MODAL_MUST_BE_CLOSED:{
            return{
                ...state,
                orderDetailsOpen: false
            }
        }
        default:{
            return state
        }
    }
}