import ReactDOM from 'react-dom';
import React, {Component, component} from 'react';

import Noticias from './Noticias';
import {SubNoticias} from './SubNoticias'
import Noticias from './componentes/Noticias';
import {Header} from './Componentes/Header'
import {data} from './data.js'
import PrincipalNoticia from './Componentes/PrincipalNoticia';

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
<<<<<<< HEAD:src/Componentes/App.js
=======
        <Header></Header>
        <br></br>
        <PrincipalNoticia/>
        <br></br><br></br>
        <SubNoticias noticias={noticias}/> 
>>>>>>> 1c7316e809c1af325838f30638aa4be68ba364ce:src/App.js
        <div className="container">
          <SubNoticias noticias={noticias}/> 
        </div>


      </div>
    )
  
}

export default App;

