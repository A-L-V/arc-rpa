import ReactDOM from 'react-dom';
import React, {Component, component} from 'react';

import Noticias from './Noticias';
import {SubNoticias} from './SubNoticias'
import {data} from '../data.js'
import PrincipalNoticia from './PrincipalNoticia';




function App() {
  const [principalNoticia, setPrincipalNoticia] = React.useState(data.slice().splice(0,1)[0]);
  const [subNoticias, setSubNoticias] = React.useState(data.slice().splice(1,4));
  const [noticias, setNoticias] = React.useState(data.slice().splice(5,15));

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
          <br></br>
        <PrincipalNoticia noticia={principalNoticia}/>
        <br></br><br></br>
        <div className="container">
          <SubNoticias noticias={subNoticias}/> 
        </div>
        <br></br>
        <Noticias noticias={noticias} />
      </div>
    )
}

export default App;

