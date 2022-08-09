import $ from "jquery"
const MenuPlat=({MainPlat,active,setActive})=>{
    $(()=>{
        let tab=[];
      $(".menu-icon > .i").click(function(){
        $(this).addClass("selected");
        tab.push(this);
        tab.map((el,index)=>{
           return el!==this && $(el).removeClass("selected") 
        })
      })
    })
// input file
$(()=>{
    $(".image").change(function(){
        var _this = $(this);
        $('input[type=file]').show().focus().click().hide();
        var filename = $('input[type=file]').val();
        _this.html(filename);
        console.log(this);
        // $(".inmageName").text(inputImage)
       
    })
})
    return(
        <>
        {/* contenaire */}
            <div className="menu-plats">
                <div className="contenaire-fluid menu">
                    {/* block de gauche, contenant les icons  */}
                    <div className="left-elt ">
                        <div className="logo elt-logo">
                            <button>HR</button>
                        </div>
                        <div className="menu-icon ">
                            <div className="plats i" onClick={()=>setActive("plat")}><i className="fa-solid fa-bowl-rice"></i></div>
                            <div className="calendar i" onClick={()=>setActive("calendar")}><i className="bi bi-calendar-week"></i></div>
                            <div className="diagram i" onClick={()=>setActive("statistique")}><i className="fa-solid fa-chart-column"></i></div>
                            <div className="list i" onClick={()=>setActive("list")}><i className="fa-solid fa-clipboard-list"></i></div>
                        </div>
                    </div>
                    
                    {/* Block du centre contenant les images */}
                    <div className="center-elt ">
                        <div className="elt-top">
                            <div className="text"><p>Hospi.resto</p></div>
                            <div className="text"><p>Liste des plats disponibles</p></div>
                        </div>
                        <div className="elt-search">
                            <div className="form">
                                <div className="input">
                                    <i className="fa-solid fa-magnifying-glass search"></i>
                                    <input type="search" placeholder="Rechercher ..." className="form-control"/>
                                </div>
                                </div>
                        </div>
                        <div className="elt-main">
                            {active==='plat'&&<MainPlat/>}
                            {active==="calendar" && <div>Je suis le composant calendrier vide</div>}
                            {active==="statistique" && <div>Je suis le composant statistique vide</div>}
                            {active==="list" && <div>Je suis le composant list vide</div>}
                        </div>
                    </div>
                    {/* Block de  droite contenant le formulaire*/}
                    <div className="rigth-elt">
                        <div className="elt-content">
                            <div className="center-elt-top">
                                <div className="icon-elt"><i className="fa-solid fa-bowl-rice"></i></div>
                                <div className="p"><p>Ajouter un nouveau plat</p></div>
                            </div>
                            <div className="elt-form">
                                <form  className="myForm">
                                    <div className="imput-elt">
                                        <input type="text" placeholder="Nom" className="form-control" />
                                    </div>
                                    <div className="imput-elt">
                                        <span>F CFA</span>
                                        <input type="text" placeholder="Prix " className="form-control" />
                                    </div>
                                    <div className="label"><span>Image</span></div>
                                    <div className="input-elt image" >
                                        <label htmlFor="image">
                                            <i className="fa-solid fa-plus file-i" ></i>
                                            <input type="file" id="image" accept="image/*,image/heif,image/heic"  className="form-control mkhogb32" />
                                            <div className="imageName"></div>
                                        </label>
                                    </div>

                                    <div className="validation">
                                        <input type="submit" value="ENREGISTRER" className="form-control" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuPlat;