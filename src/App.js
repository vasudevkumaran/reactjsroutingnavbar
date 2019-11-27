import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import RouterBlock from './routes/RouterBlock';


export default class App extends React.Component{


    render(){
        return<Router>
          <RouterBlock/>
        </Router>
    }
}