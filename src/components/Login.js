import React from 'react';
import HeaderBar from './HeaderBar';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        localStorage.removeItem('jwt');
        this.userEmailRef = React.createRef();
        this.userPasswordRef = React.createRef();
    }

    onFormSubmitted = (event) => {
        event.preventDefault();
        //console.log(this.userEmailRef.current.value);

        fetch('https://teknosapps.com/studentsv2/clients/checklogin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_email: this.userEmailRef.current.value,
                    user_password: this.userPasswordRef.current.value
                })
            }
        ).then(response => {
            response.json().then(result => {
                console.log(result);
                if (result.status === 'OK') {
                    //store jwt
                    localStorage.setItem('jwt', result.data);
                    this.props.history.push("/viewall");
                } else {
                    localStorage.removeItem('jwt');
                }
            });
        }, error => {
            console.log(error);
        });



    }

    render() {
        return <React.Fragment>
            <HeaderBar />
            <div className="container">
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-md-4 offset-md-4">
                        <form onSubmit={this.onFormSubmitted}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" name="user_email" placeholder="Enter Email"
                                    className="form-control"
                                    ref={this.userEmailRef}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="user_password" placeholder="Enter Password"
                                    className="form-control"
                                    ref={this.userPasswordRef}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}