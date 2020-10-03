import React from 'react';
import { Route } from 'react-router-dom'

import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow
} from '../pages'

import styles from './styles'

function App() {
  return (
    <styles.Base className="App">
      <styles.Container>
        <div>
          <button>Twitch</button>
        </div>
        <div>
          <button>Streams</button>
          <button>Login</button>
        </div>
      </styles.Container>
      <Route path='/' exact component={StreamList} />
      <Route path='/streams/new' exact component={StreamCreate} />
      <Route path='/streams/edit' exact component={StreamEdit} />
      <Route path='/streams/delete' exact component={StreamDelete} />
      <Route path='/streams/show' exact component={StreamShow} />
    </styles.Base>
  );
}

export default App;
