import React, { Fragment } from 'react';
import ReactPaginate from 'react-paginate';

import Banner from '../../../components/Banner';
import Article from '../../../components/Article';

const Articles = ({ articles,handlePageChange,pageCount }) => (
    <Fragment>
        <Banner />
        <main class="main-content bg-gray">
            <div class="row">
                <div class="col-12 col-lg-6 offset-lg-3">
                    {articles.map(article =>
                        <div key={article.id}>
                            <Article article={article} />
                            <hr />
                        </div>
                    )}

                    <ReactPaginate
                        containerClassName="pagination"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        activeClassName="active"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                        disabledClassName="disabled"
                        breakClassName="page-link"
                        onPageChange={handlePageChange}
                        pageCount={pageCount}
                    />
                </div>
            </div>
        </main>
    </Fragment>

)

export default Articles;