export const fetchFunc = (url, arrayId) => {
    console.log('fetch')
    if(!arrayId){
        console.log('fetch')
        fetch(url)
            .then(response =>{ 
                if(response.ok === true){
                        return response.json()
                    }
                }
            )
    .then(response =>{ 
                return (response.data)
            }
        )
    .catch(e=> {
                return false
            }
        );
    }
}