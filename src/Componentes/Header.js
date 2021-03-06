import React, {useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import Identity from "@arc-publishing/sdk-identity";
import Login from '../Arc-Identity/Login'
import App from './App';
import Registro from '../Arc-Identity/Registro'
import OlvidePass from "../Arc-Identity/OlvidePass";
import Perfil from "../Arc-Identity/Perfil";
const Plan = React.lazy(() => import('../Financiero/Plan'));




const Header= () => {
    const urlBase = "https://api-sandbox.elcomercio.pe";
    const [islogged, setIsLogged] = useState(false);
    const [showRegistro, setShowRegistro] = useState(false);
    const [showOlvide, setShowOlvide] = useState(false);
  
    useEffect(() => {
      Identity.apiOrigin = urlBase;
      handleLogged();
    });
  
    const handleLogged = () => {
      Identity.isLoggedIn()
        .then((res) => {
          if (res === true) {
            setIsLogged(true);
          }
        })
        .catch((err) => {
          console.log("Oops algo falló", err);
        });
    };
  
    const handleShowRegister = () => {
      setShowRegistro(!showRegistro);
      if (showOlvide) {
        setShowOlvide(false);
      }
    };
  
    const handleShowOlvide = () => {
      setShowOlvide(!showOlvide);
    };
  
    const handleCloseSession = () => {
      Identity.logout().then((res) => {
        setIsLogged(false);
      });
    };
  
    let userprofile = {};



    return (
        <BrowserRouter>
        <div className="m-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/*<a href="#" className="navbar-brand">Logo</a>*/}
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            {/*<a href="#" className="nav-item nav-link active"></a>*/}
                        </div>
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            {!islogged ? 
                            (<Link to="/Login" className="nav-item nav-link">Login</Link>):
                            (<Link to="/Perfil" className="nav-item nav-link">Perfil</Link>)}
                            <Link to="/Registro" className="nav-item nav-link">Registro</Link>
                            <Link to="/Plan" className="nav-item nav-link">Planes</Link>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
            <Suspense fallback={<div>Loading...</div>}>

            <Routes>
                <Route exact path="/" element={
                <div> 
                  <Suspense fallback={<div>Loading...</div>}>
                    <section>
                    <App></App>
                    </section>
                  </Suspense> 
                    </div>
                }/>
                
                {islogged ? (
                    <Route path="Perfil" element={<Perfil
                        handleCloseSession={handleCloseSession}
                        userprofile={userprofile} />} />
                ) : (
                    <Route path="Login" element={<Login  handleLogged={handleLogged}
                    handleShowRegister={handleShowRegister}
                    handleShowOlvide={handleShowOlvide}/>} />
                )}

                <Route path="Registro" element={<Registro  handleLogged={handleLogged}/>} />


                <Route path="Plan" element={<Plan />} />
            </Routes>
            </Suspense>
            </BrowserRouter>
    )
}

export {Header}