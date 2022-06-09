import React, {useEffect,useState} from 'react'
import Muiaplar from "./Muiaplar"
import Axios from "axios"
import Asosiy from './Asosiy'
import Kiyim from './Kiyim'
import Futbolka from "./Futbolka"
import Aksesuarlar from './Aksesuarlar'
import Photo from './Photo'
// import Slick from "react-slick"

export default function Main() {
    const [massiv, setMassiv] = useState([])
    
    useEffect(() =>{
        Axios.get("https://myjson.dit.upm.es/api/bins/bbm7")
        .then((response) =>{
            setMassiv(response.data)
            console.log(response.data)
        }).catch((error) =>{
            console.log(error);
        })

    }, [])
    
    // useEffect(() => {
    //     Axios.get("https://myjson.dit.upm.es/api/bins/bbm7").
    //     then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // })


  return (
    <div className='container my-3'>
        <Muiaplar/>
        <div className='d-flex m-3'>
           {
            massiv.map((item,index) => {
                return(
                    <div className='m-3'>
                        <img src={item.img_src} alt="" />
                    </div>
                )
            })
           }
        </div>
           <div>
           {/* <Photo/> */}
           <Asosiy/>
           <Kiyim/>
           <Futbolka/>
           <Aksesuarlar/>
           </div>
          
    </div>
  )
}
