import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";


export default function Asosiy() {
  const [futbolka, setFutbolka] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    Axios.get("https://myjson.dit.upm.es/api/bins/8cfv")
      .then((response) => {
        setFutbolka(response.data);
        console.log("response => ", response.data);
        dispatch({type: "searchAll", payload: response.data })

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function qoshFunIkki(val){
    console.log(val);
    dispatch({type: "add", payload: {arr : val}})
  }

  return (
    <div className="mt-5">
      <h2>Одежды</h2>
      <div className="d-flex ms-4">
      {futbolka.map((item) => {
        return (
            <div className="card3 mt-3 ms-4 textCenter">
              <img width="100%" src={item.img_src} alt="" />
              <p className="m-0">{item.cost}</p>
              <p >{item.name}</p>
              <button onClick={() => {qoshFunIkki(item)}} className='btn btn-success boyi'>Добавлять</button>
            </div>
        );
      })}
      </div>
    </div>
  );
}
