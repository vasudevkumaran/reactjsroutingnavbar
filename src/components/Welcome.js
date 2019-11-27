import React from 'react';
import HeaderBar from './HeaderBar';


export default class Welcome extends React.Component{


    render(){
        return<React.Fragment>
        <HeaderBar />
        <div className="container">
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-8 offset-md-2">
                    <h3>Welcome</h3>
                </div>
            </div>
        </div>
    </React.Fragment>
    }
}