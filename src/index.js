import ReactDOM from 'react-dom';
import React, {Component, component} from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));

import Noticias from './componentes/Noticias';

class App extends Component{

  state = {
    noticias :[]
  }

  componentDidMount(){
    this.consultaNoticia();
  }

  consultaNoticia = () => {
    let url = 'https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=fc13949e4b9541839f4693aa981caed5'

    fetch(url)
    .then(respuesta =>{
      return respuesta.json();
    })
    .then(noticias =>{
      console.log(noticias)
      this.setState({
        noticias: noticias.articles
      })
    })
  }

  root.render(){
    return(
      <div>
        <div className="container">
        <Noticias 
        noticias={this.state.noticias}
        />
        </div>


      </div>
    )
  }
}

export default App;

