import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Main from './Main'
import Aluno from './Aluno'
import Professor from './Professor'


function Routes() {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/Aluno" component={Aluno} />
                <Route path="/Professor" component={Professor} />

            </Switch>
        </main>
    );
};

export default Routes