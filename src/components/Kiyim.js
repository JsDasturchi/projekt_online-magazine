import React,{useEffect,useState} from 'react'
import Axios from "axios";
import {useDispatch} from "react-redux"

export default function Kiyim() {
    const [kiyim, setKiyim] = useState([]);
    
    const dispatch = useDispatch()

    useEffect(() => {
      Axios.get("http://myjson.dit.upm.es/api/bins/a9vv")
        .then((response) => {
          setKiyim(response.data);
          console.log(response.data);
          dispatch({type: "searchAll", payload: response.data })
          
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    function qoshFun(val){
      console.log(val);
      dispatch({type: "add", payload: {arr : val}})
    }
  
    return (
        <div className='mt-3'>
        <h2>Oбуви</h2>
        <div className='d-flex mt-3 ms-5 kattacard2'>
        {
            (kiyim.length === 0)?
            <h1>Project Kiyimlar</h1>
            :
            kiyim.map((item,index) => {
                return(
                    <div key={index} className='card2 ms-5 mb-4'>
                        <div key={index}>
                        <img width="100%" src={item.img_src} alt="" />
                        <h6 className='m-0'>{item.cost}</h6>
                        <h6>{item.name}</h6>
                        <button onClick={() => {qoshFun(item)}} className='btn btn-success boyi'>Добавлять</button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}
