import React from 'react';
import {connect} from 'react-redux'

import Signup from './SignupForm';
import {registerUser} from '../../store/actions/auth';

class SignupContainer extends React.Component{
    handleSubmit = async (data) =>{
      await  this.props.registerUser(data)
    }
    render(){
        return(
            <Signup onSubmit = {this.handleSubmit}/>
        )
    }
};

const mapStateToProps = (state) => ({
    user: state.auth.user
  });

const mapDispatchToProps = (dispatch) => ({
    registerUser : (data) => {
        dispatch(registerUser(data))
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(SignupContainer);

