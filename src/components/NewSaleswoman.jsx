import { useState } from "react";
import MainSale from "./MainSale";
import $ from "jquery";
const NewSaleswoman=()=>{
    $(()=>{
        const tab=[];
        $(".i-icon > .is").click(function(){
            $(this).addClass('selected');
            tab.push(this);
            tab.map((el,index)=>{
                return el!==this && $(el).removeClass("selected")
            })
            console.log(tab);
        })
    })
    const [sale,setSale]=useState("users")
    return(
        <>
        <div className="woman-sale">
            <div className="container-fluid content">
                <div className="left-element">
                    <div className="logo left-logo" ><button>HR</button></div>
                    <div className="i-icon">
                        <div className="users is" onClick={()=>setSale("users")}><i className="fa-solid fa-users"></i></div>
                        <div className="shop is" onClick={()=>setSale("home")}><i className="fa-solid fa-shop"></i></div>
                        <div className="file is"onClick={()=>setSale("liste")}><i className="fa-solid fa-file-lines"></i></div>
                    </div>
                </div>
                <div className="right-element ">
                    <div className="right-top">
                        <div className="contexte-1 contexte"><p>Hospi.resto</p></div>
                        <div className="contexte-2 contexte"><p>Autoriser des vendeuses</p></div>
                    </div>
                    <div className="right-main">
                        <div className="input-header">
                            <div className="form">
                              <div className="input">
                                <i className="fa-solid fa-magnifying-glass search"></i>
                                <input type="search" placeholder="Rechercher ..." className="form-control"/>
                              </div>
                            </div>
                            
                            <div className="element">
                                <p className="alert">Vendeuses enrégistrées</p>
                            </div>
                        </div>
                        <div className="main">
                            {sale==="users" && <MainSale />}
                            {sale==="home" && <div>Je suis le composant home vide</div>}
                            {sale==="liste" && <div>Je suis le composant liste de vendueses vide</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default NewSaleswoman;