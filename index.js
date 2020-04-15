import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import Contador from './Contador';


class Blog extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles: [
        'Mi primer componente en React',
        'Introduccion a React',
        'Que es React'
      ]
    }
  }

componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');
    promesa.then((response)=>{
    response.json().then((data)=>{
      console.log(data);
    })
  })
}


  render(){
    return (
      <div>
        {
          this.state.articles.map((title)=>{
            return <div className="card" style={{backgroundColor:'lightgreen', color:'darkblue'}}><p>{title}</p></div>
          })
        }
      </div>
    )
  }
}




class Formulario extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

syncEmailChanges(email){
    console.log(email);
    this.setState({
      email: email
    })
}

syncPasswordChanges(password){
    console.log(password);
    this.setState({
      password: password
    })
}

submitForm(){
  console.log(this.state);
}


  render(){
    return (
      <form>
        <input onChange={(ev)=>{ this.syncEmailChanges(ev.target.value) }}  type="email" value={this.state.email} placeholder="Email"/>
        <input  onChange={(ev)=>{ this.syncPasswordChanges(ev.target.value) }}  type="password" value={this.state.password} placeholder="********"/>
        <div>
          <input onClick={ ()=> this.submitForm() } type="submit" value="Iniciar sesion" />
        </div>
      </form>
    )
  }
}






function A(props){
  //return <p>Hola {props.nombre}</p>;
  return props.children;
}

function B(props){
  return <p>Hola {props.nombre}: 40</p>;
}

class MiComponentedeClase extends Component{
  render(){
    return <p>Hola soy de la clase</p>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Miguel Bolivar";
    return (
      <div>
        <Blog />
        <Contador />
        <A nombre={nombre}> 
          <p>Hola 2!</p>
          <p>{2+5*10}</p>
        </A>
        <B nombre={nombre} />
        <Formulario />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
