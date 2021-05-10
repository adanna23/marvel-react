import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Home, Dashboard, SignIn } from './components';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import from react-router-Dom 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//firebase import
import { FirebaseAppProvider, AuthCheck } from 'reactfire'; 
import 'firebase/auth'; 
import { firebaseConfig } from './firebaseConfig' 

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}> {/* New Provider */}
    <Provider store = { store }>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={'Marvel Inventory'}/>
        </Route>

        <Route path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>

        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>

      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
