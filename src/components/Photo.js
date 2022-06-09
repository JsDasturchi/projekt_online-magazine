import React,{useEffect,useState} from 'react'
import Axios from "axios"


export default function Photo() {
    const [photo, setPhoto] = useState([])

    useEffect(() =>{
    Axios.get("https://myjson.dit.upm.es/api/bins/dohr")
    .then((response) =>{
        setPhoto(response.data)
        console.log(response.data)
    }).catch((error) =>{
        console.log(error);
    })

}, [])
  return (
    <div>
        {
         photo.map(item => {
             return(
                 <div>
                     <img src={item.img_src} alt="" />
                 </div>
             )
         })   
        }
    </div>
  )
}
