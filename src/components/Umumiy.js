import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Umumiy() {
    const [allCost, setAllCost] = useState([]) 
    const dispatch = useDispatch()

    const savat = useSelector((state) => {
        return state.korzinkaSavat;
      });
      
      useEffect(()=>{
        let x=0
        savat.map((arr)=>{
          x = x + parseInt(arr.cost * arr.count)
          console.log(arr.cost);
        })
       setAllCost(x)
     },[savat])

      const [summa, setSumma] = useState(0)

      function increment(item){
      console.log(item.cost);
      dispatch({type: "increment", payload:{count: item}})
      
  }

  function decrement(item){
    console.log(item.cost);
    dispatch({type: "decrement", payload:{count: item}})
    
}

function deleteItem(item){
    dispatch({type: "delete" , payload:{name: item}})
  }
  
    return (
    <div>
        <div className='text-center mt-3'>
            <h2>Все цены : {allCost}</h2>
        </div>

        {
        savat.length === 0 ? (
          <>
            <h1 className="text-center mt-5 p-5">Hech narsa Qo'shilmagan</h1>
          </>
        ) : (
            <>
            {savat.map((item,index) => {
                return(
                    <div className='container text-center justify-content-between'>
                         <div className='card5 d-flex mt-3'>
                            <img src={item.img_src} alt={item.name} />
                            <div className='ms-3'>
                            <p>{item.name} </p>
                            <p>{item.cost} so'm</p>
                            <button className='btn btn-success' onClick={()=>{decrement(item)}}>-</button>
                            <button className='btn btn-primary'>{item.count}</button>
                            <button className='btn btn-success' onClick={()=>{increment(item)}} >+</button>  
                            </div>
                            <div>
                      <button onClick={()=>{deleteItem(item.name)}} className="btn btn-danger deleteBtn">O'chirish</button>
                            </div>
                            
                        </div>
                    </div>
                    
                )
            })
        }
        </>
        )
        }
    </div>
  )
}
