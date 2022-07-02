import React from "react";
import Noticia from './Noticia';


const SubNoticias = (props) =>{
    const tamaño = {
        altura: 0,
        ancho:0,
        clase: 'card-img-top',
        noData: true,
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