import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            fullname: "",
            email: "",
            phonenumber: "",
            password: "",
            confirmpassword: "",
            errors: [],
            loading: false
        }
    }
    handleRegisterSubmit = (event) => {
        event.preventDefault()
        if (this.formValid()) {
            this.setState({ errors: [], loading: true })
           
            this.props.history.push({
                pathname: '/'
                
            })
        }
    }

    formValid = () => {
        let errors = []
        console.log(errors, "errors")
        let error
        if (this.isAllfieldsEntered(this.state)) {
            error = { message: "Please fill all the details" }
            this.setState({ errors: errors.concat(error) })
            return false;
        } else if (this.isPasswordCheck(this.state)) {
            error = { message: "Password should contain atleast 6 characters" }
            this.setState({ errors: errors.concat(error) })
            return false
        } else if (this.isConfirmPassword(this.state)) {
            error = { message: "please check password" }
            this.setState({ errors: errors.concat(error) })
            return false
        }
        else {
            return true;
        }

    }
    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    isAllfieldsEntered = ({ fullname, email, phonenumber, password, confirmpassword }) => {
        return !fullname.length || !email.length || !phonenumber.length || !password.length || !confirmpassword.length

    }
    isPasswordCheck = ({ password }) => {
        return password.length < 6
    }
    isConfirmPassword = ({ confirmpassword, password }) => {
        if (confirmpassword !== password) {
            return true;
        }
    }
    setErrors = () => {
        this.setState({ errors: [] })
    }

    displayErrors = errors => errors.map((error, i) => (
        <div className="alert alert-danger alert-dismissible alerts-styles text-center" key={i}>
            <button type="button" className="close" onClick={this.setErrors}>&times;</button>
            <strong>Error..!</strong> {error.message}
        </div>
    ));
    render() {
        const { fullname, email, phonenumber, password, confirmpassword,errors, loading } = this.state
        return (
            <React.Fragment>
                {
                    errors.length > 0 && this.displayErrors(errors)
                }
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mx-auto mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-center">
                                        <h5>Register</h5>
                                    </div>
                                    <form onSubmit={this.handleRegisterSubmit}>
                                        <div className="form-group">
                                            <label>Full Name<span className="text-danger">*</span></label>
                                            <input
                                                type="type"
                                                className="form-control"
                                                placeholder="Enter Full Name"
                                                name="fullname"
                                                value={fullname}
                                                onChange={this.handleOnChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address<span className="text-danger">*</span></label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Email Address"
                                                name="email"
                                                value={email}
                                                onChange={this.handleOnChange}
                                            />

                                        </div>
                                        <div className="form-group">
                                            <label>Mobile Number<span className="text-danger">*</span></label>
                                            <input
                                                type="type"
                                                className="form-control"
                                                placeholder="Enter Mobile Number"
                                                name="phonenumber"
                                                value={phonenumber}
                                                onChange={this.handleOnChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password <span className="text-danger">*</span></label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter Password"
                                                name="password"
                                                value={password}
                                                onChange={this.handleOnChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Password <span className="text-danger">*</span></label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter Confirm Password"
                                                name="confirmpassword"
                                                value={confirmpassword}
                                                onChange={this.handleOnChange}
                                            />
                                        </div>
                                        <button type="submit" disabled={loading} className={`btn btn-success btn-block`}>
                                                {loading ? <span className="spinner-border spinner-border-sm"></span> : null} REGISTER
                                            </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Register;