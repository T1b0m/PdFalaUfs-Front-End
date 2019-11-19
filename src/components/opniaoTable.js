import React from 'react';
import '../css/AppStyle.css';


export default props => {

    const rows = props.opnioes.map(opniao => {
        return (
            <tr key={opniao.id}> 
                <td>{opniao.usuario.nome}</td>            
                <td>{opniao.comentario}</td>
                <td>{opniao.tipo}</td>
            </tr>
        )
    })

    return (
        <table className="table" type="table table-hover" >
            <thead>
                <tr>
                    <th scope = "col">Usuario</th>
                    <th scope="col">Opniao</th>
                    <th scope="col">Tipo</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
    /*
    return (
        <div className="card text-white bg-primary mb-1" style={{ "max-width": '300px' }} >
            <span className="comentario"></span>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

    )
    */
}