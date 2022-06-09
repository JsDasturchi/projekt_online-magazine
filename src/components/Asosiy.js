import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Asosiy() {
  const [icon, setIcon] = useState([]);
  
  useEffect(() => {
    Axios.get("http://myjson.dit.upm.es/api/bins/i6j3")
      .then((response) => {
        setIcon(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

//   useEffect(() => {
//     if(categories.length == 0){
//         async function getCategory  () {
//             const res = await Axios.get('http://myjson.dit.upm.es/api/bins/i6j3');
//             return await res
//         }
//         getCategory().then(res => { 
//             console.log(res)
//             dispatch({type: "categorySuccess", payload: res.data})
//         })
//     }
// }, []);

  return (
    <div className="row">
      <h2>Категории</h2>
      {/* {icon.length == 0}?
      <h2>wddwdw</h2>
      : */}
      {icon.map((item) => {
        return (
          <div className="col-4">
              <div className="card mt-2 ms-2 textCenter">
            <img width="50px" src={item.img_src} alt="" />
            <p>
            {item.name}
            </p>
              </div>
          </div>
        );
      })}
    </div>
  );
}
