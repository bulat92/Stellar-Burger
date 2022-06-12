/* const 
    urlGET = 'https://norma.nomoreparties.space/api/ingredients',
    urlPOST = 'https://norma.nomoreparties.space/api/orders';

export const fetchFunc = async (arrayId) => {
     
    if(arrayId){
        const idIngredients = arrayId.map((el) => { return el._id});
        
        return await fetch(urlPOST, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
              ingredients: idIngredients
            })
        })
        .then(response =>{ 
          if(response.ok === true){
            return response.json()
          } else {
           throw new Error("Ошибка HTTP: " + response.status);
         }
        })
        .then(response => {
            return response.order.number;
        })
        .catch(e=> { 
                return(false)
            }
        );
    }else{
        fetch(urlGET)
            .then(response =>{ 
                if(response.ok === true){
                  return response.json()
                } else {
                        throw new Error("Ошибка HTTP: " + response.status);
                    }
                })
            .catch(e=> { 
                    return(false)
                }
            );
    }
} */