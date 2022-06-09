const initialState = []

function Search(state = initialState, action) { 
    if(action.type === "searchAll"){
          let takror = [...state]
          console.log(takror);

            // takror.push(action.payload)
            action.payload.map((arr) => {
               takror.push(arr)
                // state = takror
                // return state 
           })
           console.log(takror);
           return state = takror
    }
    return state
 }

 export {Search}