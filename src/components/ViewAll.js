import React from 'react';
import HeaderBar from './HeaderBar';


export default class ViewAll extends React.Component {


    render() {
        return <React.Fragment>
            <HeaderBar />
            <div className="container">
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-md-8 offset-md-2">
                        <ul className="list-group">
                            <li className="list-group-item">Test</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}