import React from 'react';


const Header= () => {
    
    return (
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
                            <a href="#" className="nav-item nav-link">Login</a>
                            <a href="#" className="nav-item nav-link">Register</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export {Header}