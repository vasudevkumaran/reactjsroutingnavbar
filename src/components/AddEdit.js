import React from 'react';
import HeaderBar from './HeaderBar';


export default class AddEdit extends React.Component {

    onFormSubmitted = (event) => {
        event.preventDefault();
    }

    render() {
        return <React.Fragment>
            <HeaderBar />
            <div className="container">
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="col-md-8 offset-md-2">
                        <form onSubmit={this.onFormSubmitted}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="student_name" 
                                placeholder="Enter name" className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Roll number</label>
                                <input type="text" name="student_roll_num" 
                                placeholder="Enter roll number" className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" name="student_subject" 
                                placeholder="Enter subject name" className="form-control"
                                />
                            </div>
                            <div>
                                <label>
                                    <input type="checkbox" name="student_passed"/> Pass
                                </label>
                            </div>
                            <button type="submit" className="btn btn-success float-right">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}