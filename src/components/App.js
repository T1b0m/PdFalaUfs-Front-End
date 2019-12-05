import React from 'react';
import '../css/AppStyle.css';
import { withRouter } from 'react-router-dom';

import React, { Component } from 'react';

import Navbar from "./Navbar";

import { withRouter } from 'react-router-dom';

import '../css/App.css';

import GlobalStyle from './Global';

import Card from 'react-bootstrap/Card';

import Slider from './Slider';

//teste

class App extends React.Component {


  comentario1 = () => {
    this.props.history.push('/TelaComentarios')
  }

  prepareComentario = () =>{
    this.props.history.push('/comentario')
  }

  saindo = () =>{
    this.props.history.push('/login')
  }

  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
    
  }

  render() {

    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        

        <div>
          <span className="smartufs"></span>
        </div>

        <div>
          <span className="dau"></span>
        </div>

        <div>
          <span className="dcomp"></span>
        </div>

        <div>
          <sapn style={{top: 430, left: 420}} className="likert_reactions"></sapn>
        </div>

        <div>
          <span style={{left: 1160, top: '20rem'}} className="dep_ref"></span>
        </div>

        <Card style={{ top : '20rem', height: '16rem'}} className="theme_by">
          <Card.Header><h4><b>PROPOSTO POR:</b></h4></Card.Header>
          <Card.Body>
            <Card.Title><h5>Departamento de Computação</h5></Card.Title>
          </Card.Body>
          <Card.Footer className="text-muted">2 dias atrás</Card.Footer>
        </Card>

        <Card style={{ top: -150,}} className="text-center">
          <Card.Header><h1><b>EIXO TEMÁTICO:</b> SEGURANÇA</h1></Card.Header>
          <Card.Body>
            <Card.Title><h1><b>ENQUETE:</b> Você acha a UFS segura?</h1></Card.Title>
            <Card.Text>
              <p><b>Descrição da enquete:</b> Lorem ipsum dolor magnificencis il est magna et corde et lux et lorem impsum.
        </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <span style={{top: '31rem', left: '35rem'}} className="alert_how_to"></span>

        <div style={{top: '28.3rem', left: '38rem', height: 10}} className="como_votar">
          <p><b>Como votar:</b> Lorem ipsum dolor magnificencis il est magna et corde et lux et lorem impsum.</p>
        </div>

        <button style={{top: 520, marginBottom: 65}} onClick={this.prepareComentario}className="escrever_comentario" type="button">ESCREVER UM COMENTÁRIO</button>
        <button style={{top: 520, marginBottom: 65}} onclick={this.comentario1}className="sem_comentario" type="button">FINALIZAR VOTO SEM COMENTÁRIO</button>

        <GlobalStyle />
        
        <Slider />
      </>
    )
  }
}

export default withRouter(App);