import React, { Component } from 'react';

import Noticia from './Noticia';

class Noticias extends Component{
    tamaño = {
        altura: 0,
        ancho:0,
        clase: 'card-img-top',
    }
    render(){
        return (
            <div className='row'>
                {this.props.noticias.map(noticia =>(
                    <div key={noticia.url} className="col-md-4" >
                        <div className="card">
                        <Noticia
                            key={noticia.url}
                            noticia={noticia} 
                            tamaño={this.tamaño}
                        />
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}

export default Noticias;