import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow
} from '../pages'

import {
  Header
} from '../components'

import styles from './styles'

function App() {
  return (
    <styles.Base className="App">
      <BrowserRouter>
        <Header />

      {/* // ~~ Route Hookup */}
        <Route path='/' exact component={StreamList} />
        <Route path='/streams/new' exact component={StreamCreate} />
        <Route path='/streams/edit' exact component={StreamEdit} />
        <Route path='/streams/delete' exact component={StreamDelete} />
        <Route path='/streams/show' exact component={StreamShow} />
      </BrowserRouter>
    </styles.Base>
  );
}

export default App;
