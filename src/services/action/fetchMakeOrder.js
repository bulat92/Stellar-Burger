const urlPOST = 'https://norma.nomoreparties.space/api/orders';

export const
    POST_ORDER_SUCCESS = 'POST_ORDER',
    POST_ORDER_REQUEST = 'POST_ORDER_REQUEST',
    POST_ORDER_FAILED = 'FAILED',
    
    ORDER_MODAL_MUST_BE_CLOSED = 'ORDER_MODAL_MUST_BE_CLOSED';

export const fetchMakeOrder = (idIngredients) => {
 
    return function(dispatch) {
        
        dispatch({
            type: POST_ORDER_REQUEST
        })
        fetch(urlPOST, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                ingredients: idIngredients
            })
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }else{
              dispatch({
                  type: POST_ORDER_FAILED
              })
              throw new Error("Ошибка HTTP: " + response.status);
            }
        }).then( response => {
            dispatch({
              type: POST_ORDER_SUCCESS,
              number: response.order.number
          })
        })
          .catch(); 
      }
  }    