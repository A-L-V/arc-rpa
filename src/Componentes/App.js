import ReactDOM from 'react-dom';
import React, {Component, component} from 'react';

import Noticias from './Noticias';
import {SubNoticias} from './SubNoticias'
import {data} from '../data.js'

const App = () =>{
  const [noticias, setNoticias] = React.useState(data);
  //const [otrasNoticias, setOtrasNoticias] = React.useState('');

/*
  const consultaNoticia = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=fc13949e4b9541839f4693aa981caed5'

    fetch(url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(noticias =>{
      setNoticias(noticias.articles)
    })
  }*/
  
  //consultaNoticia();

    return(
      <div>
        <div className="container">
          <SubNoticias noticias={noticias}/> 
        </div>


      </div>
    )
  
}

export default App;

