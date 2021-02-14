import React, {lazy, Suspense} from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import reducers from './reducers/index';
import './App.css';

const Admin = lazy(() => import('./admin/Admin'));

const middleware = applyMiddleware(thunk);
export const store = createStore(reducers, middleware);

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        CANTEEN MANAGEMENT SYSTEM
      </div>
      <Provider store={store}>
        <Router>
          <Suspense fallback={<div />}>
            <Switch>
              <Route path='/admin' component={Admin} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
