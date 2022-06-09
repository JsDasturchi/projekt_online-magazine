const Korzinka = []

function addKorz(state = Korzinka, action){
        if(action.type === "add"){
            let arr = [...state]
      let Sanash= state.filter(arr=>{
        return action.payload.arr.name === arr.name
      })
      if(Sanash.length === 0){
        arr.push({
          img_src: action.payload.arr.img_src, 
          name: action.payload.arr.name,
          cost: action.payload.arr.cost,
          count: 1
        })
      }
      if(Sanash.length !== 0){
        alert("Bu maxsulot savatchaga kiritilgan")
      }
    return (state = arr);
        }

        if(action.type === "delete"){
            let array = [...state]
            let filter = array.filter((arr)=>{
              return  arr.name !== action.payload.name
            })
            console.log(filter);
          return state = filter  
          }

        if (action.type === 'increment') {
            let actionValue = action.payload.count
            let currentK=[...state]
        
            for(let i = 0; i < currentK.length; i++){
              let currentArr = {...currentK[i]}
              if(currentArr.name === actionValue.name){
                currentArr.count = currentArr.count + 1
              }
              currentK[i] = currentArr
            }
            state = currentK
        
            return state
        
          }

          if (action.type === 'decrement') {
            let actionValue = action.payload.count
            let currentK=[...state]
        
            for(let i = 0; i < currentK.length; i++){
              let currentArr = {...currentK[i]}
              if(currentArr.name === actionValue.name){
                currentArr.count = currentArr.count - 1
              }
              currentK[i] = currentArr
            }
            state = currentK
        
            return state
        
          }

        return state
}

export default addKorz