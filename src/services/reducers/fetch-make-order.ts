import {
    TFetchMakeOrder,
    POST_ORDER_SUCCESS,
    POST_ORDER_REQUEST,
    POST_ORDER_FAILED

} from '../action/fetch-make-order';

interface IInitialState{
    orderNumber: string;
    orderNumberRequest: Boolean;
    orderNumberFailed: Boolean;
}

const initialState: IInitialState = {
    orderNumber: '',
    orderNumberRequest: false,
    orderNumberFailed: false,
}
export const orderReducer = (state = initialState, action: TFetchMakeOrder) => {
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
                orderNumber: action.number
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