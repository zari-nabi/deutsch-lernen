import React, { Fragment } from 'react';

import Banner from '../../../components/Banner';
import Article from '../../../components/Article';

const Articles = ({articles}) => (
    <Fragment>
        <Banner/>
        <main class="main-content bg-gray">
            <div class="row">
            <div>
                {articles.map(article => <li key ={article.id}>{article.title}</li>)}
            </div>
                <div class="col-12 col-lg-6 offset-lg-3">
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
        </main>
    </Fragment>

)

export default Articles;