import React from "react";
import './Switch.css'


const Plan = (props) => {
    const [activado, setActivado] = React.useState('false')

    return (
        <div className="align-items-center">
            <nav class="nav">

                <ul className="header-ul position-relative">
                    <li>
                        Plan Estandar
                    </li>
                    <li>
                        <label className="switch">
                            <input type="checkbox" className="checkbox" id="mode" />
                            <span className="slider"></span>
                        </label>
                    </li>
                    <li>
                        Plan Premium
                    </li>
                </ul>
            </nav>
            <div className="container-fluid w-50  ">
                <div class="row align-items-center">
                    <div class="col ">
                        <p className="fs-1 strong text-end">S/ 59</p>
                    </div>
                    <div class="col ">
                        <p className="fs-3 strong text-start">/Al mes</p>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col ">
                        <p className="text-break text-center">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                        </p>
                    </div>

                </div>
                <div class="row align-items-center">
                    <div class="col ">
                        <hr></hr>
                    </div>

                </div>

                <div class="row align-items-center">
                    <button class="col bg-black">
                        <p class="fs-5 text-light text-center">Suscribirme</p>
                    </button>
                </div>


            </div>
        </div >
    )
}
export default Plan;