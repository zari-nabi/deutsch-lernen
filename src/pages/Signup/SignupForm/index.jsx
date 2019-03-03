import React from 'react';
import {reduxForm,Field} from 'redux-form';

const Signup = ({handleSubmit,submitting,invalid}) => (
    <div className="card card-shadowed p-50 w-400 mb-0" style={{ maxWidth: '100%' }}>
        <h5 className="text-uppercase text-center">Register</h5>
        <br />
        <br />
        <form className="form-type-material" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="Email address" />
            </div>
            <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password (confirm)" />
            </div>
            <br />
            <button className="btn btn-bold btn-block btn-primary" type="submit" disabled={submitting || invalid}>Register</button>
        </form>
        <hr className="w-30" />
        <p className="text-center text-muted fs-13 mt-20">Already have an account?
    <a href="login.html">Sign in</a>
        </p>
    </div>

);

export default reduxForm({
    form: 'signup',
})(Signup)