import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import {MdShoppingCart} from "react-icons/md"

export default function Muiaplar() {
  const searchIzlash = useSelector(state => state.izlaApi)
    //   return state.izlaApi;
    // });
    console.log(searchIzlash);

    const sanoq = useSelector((state) => {
      return state.korzinkaSavat.length;
    });

  const [rost, setRost] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")




  function qidirFun() { 
    setRost(true)
   }

   function closeFun() {
    setRost(false)
     }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-2'>
          <a href="/">
            <div className='chiziq'></div>
      <div className='chiziq'></div>
      <div className='chiziq'></div>
          </a>
          
        </div>
      <div className='col-8'>
        <input onClick={qidirFun} onChange={(event) => {setSearchTerm(event.target.value)}}    className='form form-control' type="text" placeholder='Search...' />

        {
                (rost)?
                <div className='div5'>
                    <button className='btn btn-danger' onClick={closeFun}>close</button>

                    {
                                      searchIzlash.filter((item) =>{
                                          if( searchTerm == ""){
                                              return item
                                          } else if(item.img_src.toLowerCase().includes(searchTerm.toLowerCase())){
                                              return item
                                          }
                                      }).map((item, index) =>{
                                          return(
                                               <div className='' key={index}>
                                                  <div className='d-flex'>
                                                  <img className='img1 img33' src={item.img_src} alt={item.name} />
                                                  <h6 className='m-3'>{item.name}</h6>
                                                  </div>
                
                                                </div>
                                          )
                                        })
                                  }


                </div>
                :
                <div className='div6'>



                </div>
            }

      </div>
      <div className='col-2'>
         <Link to="/Umumiy">
         <MdShoppingCart className="fs-1" />
            {
              (sanoq.length === 0)?
              <></>
              :
              <><sup className="bg-danger p-1 text-light rounded-circle" width="10px" height="10px">{sanoq}</sup></>

            }
         </Link>  
      </div>

      </div>

    </div>
  )
}


