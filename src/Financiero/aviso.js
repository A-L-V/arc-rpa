import Swal from 'sweetalert2';
import React from "react";

function Aviso() {
  const mostrarAlerta=()=>{
    Swal.fire({
      title: 'Informacion',
      text: 'Esta seguro de adquirir esta suscripcion',
      footer: `<p><b> La suscripcion de un mes da comienzo el: ${new Date().getDay()} / ${new Date().getMonth()} /  ${new Date().getFullYear()} </b></p>`,
      icon: 'question',
      timer: '6000',
      showDenyButton:true,
      denyButtonText: 'No',
      confirmButtonText: 'SI',
      confirmButtonColor: "#33FF46",

    }).then(response => {
      if(response.isConfirmed){
        Swal.fire('EXITO','El plan a sido comprado de manera exitosa en breve le llegara un correo de verificacion','success');
      }else if(response.isDenied){
        Swal.fire('Atencion','Se le redigira a la pantalla de suscripciones','warning');
      }else{
        Swal.fire('Error','Ocurrio algo inesperado','error');
      }
    })
  }






  return(
    <div className='App'>
      <br/>
      <button className="bg-dark " onClick={()=>mostrarAlerta()}>COMPRAR</button>
    </div>
  )
}

export {Aviso};
