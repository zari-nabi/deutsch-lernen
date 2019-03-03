import React, { Fragment } from 'react';
import {connect} from 'react-redux';

import {getArticles} from '../../store/actions/articles';
import Articles from './ArticlesForm';

class ArticlesContainer extends React.Component{
    componentWillMount(){
        this.props.getArticles();
    }

    getPageCount =(total,perPage) => {
        return Math.ceil(total / perPage);
    }
    handlePageChange = (page) =>{
        console.log(page);
    }
    render(){
        console.log(this.props.articles)
        return(
            <Articles
             articles={this.props.articles}
             pageCount = {this.getPageCount(this.props.articles.length,3)}
             handlePageChange={this.handlePageChange}
             />
        )
    };
};

const mapStateToProps = (state) => ({
    articles: state.articles
})

const mapDispatchToProps = (dispatch) => ({
    getArticles : () => {
        dispatch(getArticles())
    }
});
 
export default connect(mapStateToProps,mapDispatchToProps)(ArticlesContainer) ;