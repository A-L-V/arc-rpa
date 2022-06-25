import React from "react";

const Noticia = (props) =>{

    const{url, author, title, urlToImage, content}= props.noticia;

    const {altura, ancho, clase} = props.tamaño
    const diseño = (altura!=0) ? ({
        width: altura, height: ancho,
    }  ) : ({
    });

    const diseñoImage = (altura!=0) ? ({
        width: '100%', height: '150px',
    }  ) : ({
    })
    const texto = (altura!=0) ? '' : content;
    

    return(
        <div style={diseño} className="cambio">
            <img src={urlToImage} alt={title} className={clase}  style={diseñoImage}/>
            <span className="card-title">{author}</span>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{texto}</p>
                <a href={url} className="btn btn-primary">LEER MAS</a>
            </div>
        </div>
    )
}
export default Noticia;