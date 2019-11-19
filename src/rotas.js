import React from 'react'

import Login_Screen from './components/Login_Screen'
import App from './components/App'
import CommentScreen from './components/CommentScreen'
import { Route, Switch, HashRouter} from 'react-router-dom'
import Comentarios from './components/Comentarios'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login_Screen} />
                <Route path='/enquete' component={App} />
                <Route path='/comentario' component={CommentScreen} />
                <Route path='/TelaComentarios' component={Comentarios} />

            </Switch>
        </HashRouter>

    )
}

export default Rotas