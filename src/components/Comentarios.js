import React from 'react';
import '../css/AppStyle.css';
import { withRouter } from 'react-router-dom'
import OpniaoTable from './opniaoTable'
import OpniaoService from '../service/opniaoService'

class Comentarios extends React.Component {

    state = {
        opnioes: []
    }

    constructor(){
        super()
        this.service = new OpniaoService();
    }

    saindo = () => {
        this.props.history.push('/login')
    }

    buscar = () => {
        this.service.consultar().then(resposta => {
            console.log(resposta.data)
            this.setState({opnioes: resposta.data})
        }).catch( error => {
            console.log(error)
        })

    }
    render() {

        /*
        const lancamentos = [
            {nome: 'vitor', comentario: 'teste', tipo: 'Bom'},
            {nome: 'matheus', comentario: 'teste2 ', tipo: 'Luim'},
            {nome: 'Kaio', comentario: 'teste3 ', tipo: 'fodadasd'},
            {nome: 'vitor', comentario: 'teste ', tipo: 'Bom'}
        ]
        */

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
                            <span className="exit_button" type="button"></span>
                            <nav>
                                <ul className="nav">
                                    <li><button className="nav_btn" type="button">Audiências</button></li>
                                    <li><button className="nav_btn" type="button">Calendário</button></li>
                                    <li><button className="nav_btn" type="button">Ajuda</button></li>
                                    <li><button onClick={this.buscar} className="nav_btn" type="button">Opinioes</button></li>
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
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="bs-Component">
                            <OpniaoTable opnioes={this.state.opnioes}/>
                            </div>
                        </div>
                    </div>

                </body>



            </div >
        );
    }
}

export default withRouter(Comentarios);