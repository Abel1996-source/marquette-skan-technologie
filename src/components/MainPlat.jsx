import { useState } from "react";
import $ from 'jquery';


const MainPlat = () => {
    const [foods,setFoods]=useState([
        {
            id:1,
            name:"Riz blanc et sauce arachide avec queue de beuf",
            image:"./img/riz.jpg",
            price:2000
        },
        {
            id:2,
            name:"Riz blanc et sauce arachide avec queue de beuf",
            image:"./img/riz.jpg",
            price:2000
        },
        {
            id:3,
            name:"Riz blanc et sauce arachide avec queue de beuf",
            image:"./img/riz.jpg",
            price:2000
        },
        {
            id:4,
            name:"Riz blanc et sauce arachide avec queue de beuf",
            image:"./img/riz.jpg",
            price:2000
        },
        {
            id:5,
            name:"Riz blanc et sauce arachide avec queue de beuf",
            image:"./img/riz.jpg",
            price:2000
        },
        {
            id:6,
            name:"Riz blanc et sauce arachide avec queue de beuf",
            image:"./img/riz.jpg",
            price:2000
        },
        {
            id:7,
            name:"Riz blanc et sauce arachide avec queue de beuf",
            image:"./img/riz.jpg",
            price:2000
        },
        {
            id:8,
            name:"Riz blanc et sauce arachide avec queue de beuf",
            image:"./img/riz.jpg",
            price:2000
        },
        {
            id:9,
            name:"Riz blanc et sauce arachide avec queue de beuf",
            image:"./img/riz.jpg",
            price:2000
        },
    ])
    $(()=>{
        $(".pen").click(function(){
            $(".prix").focus()
        })
    })
  return (
    <>
   {/* composant contenant les images des plats */}
    <div className="container-fluid elt-card">
    {
        foods.map((food,index)=>(<div className="card" style={{width: "18rem"}} key={index}>
        <img src={food.image} className="card-img-top" alt="plat de riz"/>
        <div className="card-body">
            <div className="-icon">
                <div className="pen"><i className="fa-solid fa-pen"></i></div>
                <div className="trash"><i className="fa-solid fa-trash-can"></i></div>
            </div>
            <p className="card-text">{food.name} </p>
            <span className="price">{food.price} F CFA</span>
        </div>
    </div>))
    }
       
    </div>
    </>
  );
};
export default MainPlat;
