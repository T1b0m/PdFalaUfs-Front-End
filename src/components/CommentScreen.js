import React from 'react';

import '../css/CommentScreen.css';

import axios from 'axios';

import { withRouter } from 'react-router-dom'

import Navbar from './Navbar';

import Slider from './Slider';

import GlobalStyle from './Global';

import Card from 'react-bootstrap/Card'

class Comment extends React.Component {

  state = {
    comentario: '',
    tipo: 'BOM',
    usuario: ''
  }

  cadastrarComentario = () => {

    const usuarioLogadoString = localStorage.getItem('_usuario_logado')
    const usuarioLogadoObjeto = JSON.parse(usuarioLogadoString)
    //console.log('usuario logado do localstorage>', usuarioLogadoObjeto)
    this.setState({ usuario: this.state.usuario = usuarioLogadoObjeto.id })


    axios.post('http://localhost:8080/api/opnioes', {
      comentario: this.state.comentario,
      tipo: this.state.tipo,
      usuario: this.state.usuario
    }).then(response => {
      this.props.history.push('/TelaComentarios')
    }).catch(erro => {
      this.setState({ mensageErro: erro.response })
    })
  }

  saindo = () => {
    this.props.history.push('/login')
  }

  ListaComentarios = () => {
    this.props.history.push('/TelaComentarios')
  }

  render() {
    return (
      <div>
        <head>
          <meta charSet="UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>Fala UFS</title>
        </head>
        <header>
          <Navbar />
          <meta charSet="UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </header>
        <body>

          <div>
            <span className="smartufs"></span>
            <div>
              <span className="dau"></span>
              <div>
                <span className="dcomp"></span>
                <div>
                  <sapn style={{top: 430, left: 420}}className="likert_reactions"></sapn>
                </div>
                <span style={{left: 1160, top: '20rem'}}className="dep_ref"></span>
              </div>
            </div>
          </div>



          <Card style={{ top : '20rem', height: '16rem'}} className="theme_by">
            <Card.Header><h4><b>PROPOSTO POR:</b></h4></Card.Header>
            <Card.Body>
              <Card.Title><h5>Departamento de Computação</h5></Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted">2 dias atrás</Card.Footer>
          </Card>


          <Card style={{ top: -150,}}className="text-center">
            <Card.Header><h1><b>EIXO TEMÁTICO:</b> SEGURANÇA</h1></Card.Header>
            <Card.Body>
              <Card.Title><h1><b>ENQUETE:</b> Você acha a UFS segura?</h1></Card.Title>
              <Card.Text>
                <p><b>Descrição da enquete:</b> Lorem ipsum dolor magnificencis il est magna et corde et lux et lorem impsum.</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Slider />

          <span style={{top: '31rem', left: '35rem'}} className="alert_how_to"></span>

          <div style={{top: '28.3rem', left: '38rem',height: 10}} className="como_votar">
            <p><b>Como votar:</b> Lorem ipsum dolor magnificencis il est magna et corde et lux et lorem impsum.</p>
          </div>

          <button style={{top: 520}} className="escrever_comentario" type="button">ESCREVER UM COMENTÁRIO</button>
        <button style={{top: 520}} onclick={this.comentario1}className="sem_comentario" type="button">FINALIZAR VOTO SEM COMENTÁRIO</button>

          <div className="form-group">
            <textarea style={{top: 390, left: 5, height: 200,  width: 500, fontFamily: 'Montserrat', fontSize: 14}}value={this.state.comentario}
              onChange={e => this.setState({ comentario: e.target.value })}
              className="comment_box" rows="3">

            </textarea>

          </div>
          <button style={{top: 820, marginBottom: 65}} onClick={this.cadastrarComentario} className="end_vote" type="button"><b>FINALIZAR VOTO COM COMENTÁRIO</b></button>
          <GlobalStyle />
        </body>
      </div>
    );
  }
}

export default withRouter(Comment);