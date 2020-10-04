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
        {/* // ~~ Header */}
        <Header />
        {/* <styles.Container>
          <styles.Logo>
            <styles.NavLink
              to='/'
            >
              TWITCH
            </styles.NavLink>
          </styles.Logo>
          <styles.NavContainer>
            <styles.NavButton>
              <styles.NavLink
                to='/streams/new'
              >
                Streams
              </styles.NavLink>
            </styles.NavButton>
            <styles.NavButton>Login</styles.NavButton>
          </styles.NavContainer>
        </styles.Container> */}

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
