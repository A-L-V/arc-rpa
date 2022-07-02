import React from "react";
import './Switch.css'
import { AiFillCheckCircle } from 'react-icons/ai';
import data from './PlanesData'

import {Aviso} from './Aviso'

const Plan = (props) => {
    const [activado, setActivado] = React.useState('true')
    const [info, setInfo] = React.useState(data[0])
    
    const cambiarPlan = () => {
        if(activado){
            setInfo(data[1])
            setActivado(false)
        }else {
            setInfo(data[0])
            setActivado(true)
        }
    }

    return (
        <div className="align-items-center">
            <nav class="nav">

                <ul className="header-ul position-relative">
                    <li className={activado? "fw-bold" : ""} >
                        Plan Estandar
                    </li>
                    <li>
                        <label className="switch" >
                            <input type="checkbox" className="checkbox" id="mode" onClick={cambiarPlan} />
                            <span className="slider"></span>
                        </label>
                    </li>
                    <li className={!activado? "fw-bold" : ""} >
                        Plan Premium
                    </li>
                </ul>
            </nav>
            <div className="container-fluid w-50  ">
                <div class="row align-items-center">
                    <div class="col ">
                        <p className="fs-1 fw-bold text-end">{info.precio}</p>
                    </div>
                    <div class="col ">
                        <p className="fs-3 fw-bold text-start">/Al mes</p>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col ">
                        <p className="text-break text-center">{info.descripcion}
                        </p>
                    </div>

                </div>
                <div class="row align-items-center">
                    <div class="col ">
                        <hr></hr>
                    </div>
                </div>

                {info.ventajas.map( vent=> {
                    return <div class="row align-items-center text-center">
                        <div class="col ">
                            <AiFillCheckCircle/> {vent}
                        </div>
                    </div>
                })}

                <div className="row align-items-center">
                    <div className="col ">
                        <hr></hr>
                    </div>
                </div>

                <div className="row align-items-center">
                    <Aviso className="col text-light text-center bg-dark ">Suscribirme</Aviso>
                </div>


            </div>
        </div >
    )
}
export default Plan;