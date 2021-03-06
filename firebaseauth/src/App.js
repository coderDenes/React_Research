import React, {useContext} from 'react';
import {Route, Switch} from 'react-router-dom'
import Signup from './component/Signup'
import Signin from './component/Signin'
import Home from './component/Home'
import {firebaseAuth} from './provider/AuthProvider'

function App() {
  const { token } = useContext(firebaseAuth)
  console.log(token)
  return (
    <>
   <Switch>
        {/* route allows you to render by url path */}

        <Route exact path='/' render={rProps => token === null ? <Signin /> : <Home />} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </>
  );
}

export default App;