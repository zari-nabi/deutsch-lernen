import React from 'react';
import { connect } from 'react-redux';

import { createArticle } from '../../store/actions/articles';
import CreateArticle from './CreateArticleForm';

class CreateArtContainer extends React.Component {
    handleSubmit = async (event,values) => {
        event.preventDefault();
        await this.props.createArticle(values);
    }
    render() {
        return (
            <CreateArticle
                onSubmit={this.handleSubmit} />
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    createArticle: (values) => {
        dispatch(createArticle(values))
    }
})

export default connect(null, mapDispatchToProps)(CreateArtContainer);