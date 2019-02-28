import React from 'react';
import {connect} from 'react-redux';

import Banner from '../../components/Banner';
import Home from './HomeForm';

class HomeContainer extends React.Component{
    render(){
        return(
            <Home/>
        )
    };
};

const mapStateToProps = (state) => ({

}) 

export default connect(mapStateToProps)(HomeContainer) ;