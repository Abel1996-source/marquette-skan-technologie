
const Login=()=>{
    return(
        <>
        <div className="login">
            <div className="content-login">
                <div className="login-top">
                    <div className="logo">
                        <button>HR</button>
                    </div>
                    <div className="logo-contexte">
                        <p>Hospi Resto</p>
                    </div>
                </div>
                <div className="login-input">
                    <div className="connexion">
                        <p>Connexion</p>
                    </div>
                    <div className="content-input">
                        <form >
                            <div className="input ">
                                <i className="fa-solid fa-user icon"></i>
                                <input type="email" placeholder="Login ou Email" className="form-control "/>
                                
                            </div>
                            <div className="input">
                                <i className="fa-solid fa-lock icon"></i>
                                <input type="password" placeholder="Mot de passe"  className="form-control password"/>
                                <div className="error">Mot de passe oublié</div>
                            </div>
                            <div className="input">
                                <input type="submit" value='Se connecter' className="form-control submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
export default Login;