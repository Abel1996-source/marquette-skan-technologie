import { useState } from "react";
import $ from 'jquery';
const MainSale = () => {
  const [persons,setPersons]=useState([
    {
      id:1,
      name:"Henriette Kouakou",
      adresse:"Koumassi remblais",
      conatct:"27 22 41 13 27"
    },
    {
      id:2,
      name:"Henriette Kouakou",
      adresse:"Koumassi remblais",
      conatct:"27 22 41 13 27"
    },
    {
      id:3,
      name:"Henriette Kouakou",
      adresse:"Koumassi remblais",
      conatct:"27 22 41 13 27"
    },
    {
      id:4,
      name:"Henriette Kouakou",
      adresse:"Koumassi remblais",
      conatct:"27 22 41 13 27"
    },
    {
      id:5,
      name:"Henriette Kouakou",
      adresse:"Koumassi remblais",
      conatct:"27 22 41 13 27"
    },
    {
      id:6,
      name:"Henriette Kouakou",
      adresse:"Koumassi remblais",
      conatct:"27 22 41 13 27"
    }
  ])
  $(()=>{
    $('.ajouter').click(function(){
      $(".element").addClass('view')
    })
  })
// liste des vendeuses
const handlClick=()=>{
  let i = document.querySelectorAll(".f")
  console.log(i);
  i.forEach((el)=>{
     el.classList.toggle("fa")
     $(()=>{
      if( el.classList.contains("fa")){

        console.log($('.tbody').slideUp("slow"));
      }else{
        console.log($('.tbody').slideDown("slow"));

      }
     })
  })
}

  return (
    <>
    {/* table contenant la liste des vendeuses à ajouter */}
      <table>
        <div className="table">
          <thead>
            <tr className="ligne-1" >
              <div className="th" >
                <th>Nom et prénom</th>
                <i className="fa-solid fa-angles-down f" onClick={handlClick}></i>
              </div>
              <div className="th">
                <th>Adresse</th>
                <i className="fa-solid fa-angles-down f" onClick={handlClick}></i>
              </div>
              <div className="th">
                <th>Contact</th>
                <i className="fa-solid fa-angles-down f" onClick={handlClick}></i>
              </div>
              <div className="th">
                <th>Action</th>
                <i className="fa-solid fa-angles-down f" onClick={handlClick}></i>
              </div>
            </tr>
          </thead>
        </div>
        <div className="tbody">
          <tbody>
            {
            
              persons.map((person,index)=>(
              <tr key={index}>
                <td>{person.name} </td>
                <td>{person.adresse}</td>
                <td>{person.conatct}</td>
                <td>
                  <button className="btn ajouter">AJOUTER</button>
                </td>
              </tr>
              ))
            }
              
          </tbody>
        </div>
      </table>
    </>
  );
};

export default MainSale;