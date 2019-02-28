import React, { Fragment } from 'react';
import {connect} from 'react-redux';

import {getArticles} from '../../store/actions/articles';
import Articles from './ArticlesForm';

class ArticlesContainer extends React.Component{
    componentWillMount(){
       // this.props.getArticles();
    }
    render(){
        return(
            <Articles/>
        )
    };
};

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    getArticles : () => {
        dispatch(getArticles())
    }
});
 
export default connect(mapStateToProps,mapDispatchToProps)(ArticlesContainer) ;