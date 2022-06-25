import React from 'react';

import { render } from "react-dom";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
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
                        {/*<BrowserRouter>
                            <Link to="/">Home</Link>
                            <Link to="/posts">Posts</Link>
                            <Routes>
                                <Route exact path="/" element={
                                <div> 
                                    <TasksForm addTask={this.addTask}/>
                                    <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
                                    </div>
                                }/>
                                <Route path="posts" element={<Posts />} />
                            </Routes>
                            </BrowserRouter>*/}
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