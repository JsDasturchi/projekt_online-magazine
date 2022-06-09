import React, {useEffect, useState} from 'react'
import Axios from "axios"
import { useDispatch } from 'react-redux'

export default function Aksesuarlar() {
    const [aksesuar, SetAksesuar] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        Axios.get("https://myjson.dit.upm.es/api/bins/ihc9")
        .then(response => {
            console.log(response.data);
            SetAksesuar(response.data)
          dispatch({type: "searchAll", payload: response.data })

        })
        .catch(err => {
            console.log(err);
        })
    },[])

    function qoshFunUch(val){
        console.log(val);
        dispatch({type: "add", payload: {arr : val}})
      }
  
  
    return (
        <div className='mt-5'>
        <h2>Aксессуары</h2>
        <div className='d-flex mb-5 ms-5'>
        {
            aksesuar.map((item) => {
                return(
                    <div className='card4 mt-3 ms-3 textCenter'>
                        <img width="100%" src={item.img_src} alt="" />
                        <p className='m-0 text-black'>100$</p>
                        <p>{item.name}</p>
                        <button onClick={() => {qoshFunUch(item)}} className='btn btn-success boyi'>Добавлять</button>

                    </div>
                )
            })
        }
    </div>
    </div>
  )
}
