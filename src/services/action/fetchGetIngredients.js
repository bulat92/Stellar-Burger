

export const
    GET_INGREDIENS = 'GET_INGREDIENS',
    GET_INGREDIENS_FAILED = 'GET_INGREDIENS_FAILED',
    GET_INGREDIENS_SUCCESS = 'GET_INGREDIENS_FAILED';

const url = 'https://norma.nomoreparties.space/api/ingredients';    

export const fetchGetIngredients = () => {
    return function(dispatch){

        dispatch({
            type: GET_INGREDIENS
        })

        fetch(url)
        .then(response =>{ 
          if(response.ok === true){
            dispatch({
                type: GET_INGREDIENS_SUCCESS,
                ingredients: response.json()
            })  
          }else{
            dispatch({
                type: GET_INGREDIENS_FAILED
            }) 
            
          }
        })
        .then(response => setFromFetch(response.data), setIsLoading(false))
        .catch(e=> setHasError(true), setIsLoading(false));

        window.addEventListener('keydown', escapeKeyFunc);

        return() => {
          window.removeEventListener('keydown', escapeKeyFunc);
        }
    }
}    