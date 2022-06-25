import ReactDOM from 'react-dom';
import React, {Component, component} from 'react';

import Noticias from './componentes/Noticias';
import {Header} from './Componentes/Header'
import {SubNoticias} from './Componentes/SubNoticias'


const App = () =>{
  const [noticias, setNoticias] = React.useState('');
  const [otrasNoticias, setOtrasNoticias] = React.useState('');


  const consultaNoticia = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=fc13949e4b9541839f4693aa981caed5'

    fetch(url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(noticias =>{
      setNoticias(noticias.articles)
    })
  }
  
  consultaNoticia();

    return(
      <div>
        <Header></Header>
        {/*<SubNoticias noticias={noticias}/> */}
        <div className="container">
   
        </div>


      </div>
    )
  
}

export default App;

