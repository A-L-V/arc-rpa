import React from "react";
import Noticia from './Noticia';


const SubNoticias = (props) =>{
    const tamaño = {
        altura: '250px',
        ancho: '250px',
        class: 'w-25 h-15'
    }


    return (
        <div class="container">
            <div class="row">
            {props.noticias.map(noticia =>(
                <div class="col-sm">
                    <Noticia
                            key={noticia.url}
                            noticia={noticia} 
                            tamaño={tamaño}
                        />
                    </div>
                    ))}
            </div>
        </div>
    )
}

export {SubNoticias}