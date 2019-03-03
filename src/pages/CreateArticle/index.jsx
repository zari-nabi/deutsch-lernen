import React from 'react';
import { connect } from 'react-redux';

import { createArticle } from '../../store/actions/articles';
import CreateArticle from './CreateArticleForm';

class CreateArtContainer extends React.Component {
    handleSubmit = async (data) => {
        await this.props.createArticle(data);
    }
    render() {
        return (
            <CreateArticle
                onSubmit={this.handleSubmit} />
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    createArticle: (data) => {
        dispatch(createArticle(data))
    }
})

export default connect(null, mapDispatchToProps)(CreateArtContainer);