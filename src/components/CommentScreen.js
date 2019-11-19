import React from 'react';
import '../css/CommentScreen.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

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
    this.setState({usuario: this.state.usuario = usuarioLogadoObjeto.id})

    
    axios.post('http://localhost:8080/api/opnioes', {
      comentario: this.state.comentario,
      tipo: this.state.tipo,
      usuario: this.state.usuario
    }).then(response => {
      this.props.history.push('/TelaComentarios')
    }).catch(erro => {
      this.setState({ mensageErro: erro.response})
    })
  }

  saindo = () =>{
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
        <body>
          <header>
            <div className="header">

              <span className="logo_img"></span>
              <span className="logo_text">Fala UFS</span>
              <nav>
                <ul className="nav">
                  <li><button className="nav_btn" type="button">Audiências</button></li>
                  <li><button className="nav_btn" type="button">Calendário</button></li>
                  <li><button className="nav_btn" type="button">Ajuda</button></li>
                  <li><button className="nav_btn" type="button">Perfil</button></li>
                  <li><button onClick={this.saindo} className="nav_btn" type="button">Sair</button></li>
                </ul>
              </nav>
            </div>
          </header>
          <div>
            <span className="smartufs"></span>
          </div>
          <div>
            <span className="dau"></span>
          </div>
          <div>
            <span className="dcomp"></span>
            <span className="slider_function"></span>
          </div>
          <div>
            <sapn className="likert_reactions"></sapn>
          </div>
          <div className="theme_text">
            <h1><b>EIXO TEMÁTICO:</b> SEGURANÇA</h1>
          </div>

          <div className="purpose">
            <span className="dep_ref"></span>
            <div className="userref_text">
              <h5><b>PROPOSTO POR:</b></h5>
              <p>Departamento de Computação</p>
            </div>
          </div>

          <div className="enquete">
            <h3><b>ENQUETE:</b> Você acha a UFS segura?</h3>
          </div>

          <div className="descricao">
            <p><b>Descrição da enquete:</b> Lorem ipsum dolor magnificencis il est magna et corde et lux et lorem impsum.
        </p>
          </div>

          <span className="alert_how_to"></span>

          <div className="como_votar">
            <p><b>Como votar:</b> Lorem ipsum dolor magnificencis il est magna et corde et lux et lorem impsum.</p>
          </div>

          <button className="escrever_comentario" type="button">Escrever um comentário</button>

          <div className="form-group">
            <textarea value={this.state.comentario}
             onChange={e => this.setState({comentario: e.target.value})} 
             className="comment_box" rows="3">
            
            </textarea>
          </div>
          <button onClick={this.cadastrarComentario} className="end_vote" type="button">Finalizar voto com comentário</button>
        </body>
      </div>
    );
  }
}

export default withRouter(Comment);