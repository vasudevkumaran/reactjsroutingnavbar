import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Welcome from '../components/Welcome';
import Login from '../components/Login';
import ViewAll from '../components/ViewAll';
import AddEdit from '../components/AddEdit';

const ProtectedRoute = ({component:Component, ...rest}) => {
    return <Route {...rest} render={(props)=>{
        return localStorage.getItem('jwt') ? 
        <Component {...props} /> : <Redirect to="/login" />
    }} />
}

export default class RouterBlock extends React.Component{
    
    render(){
        return<React.Fragment>
            <Route exact path="/" component={Welcome} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/viewall" component={ViewAll} />
            <ProtectedRoute path="/addedit" component={AddEdit} />
        </React.Fragment>
    }
}