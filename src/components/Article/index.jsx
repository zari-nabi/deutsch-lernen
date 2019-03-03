import React from 'react';

const Article = ({article}) => (
    <article className="mt-90">
        <header className="text-center mb-40">
            <h3>
                <a href="blog-single.html">{article.title}</a>
            </h3>
            <div className="link-color-default fs-12">
                <a href="#">News</a>,
      <time>May 13, 2017</time>
            </div>
        </header>
        <a href="blog-single.html">
            <img className="rounded" src="assets/img/blog-1.jpg" alt="..." />
        </a>
        <div className="card-block">
            <p className="text-justify">{article.content}</p>
            <p className="text-center mt-40">
                <a className="btn btn-primary btn-round" href="blog-single.html">Read more</a>
            </p>
        </div>
    </article>

);

export default Article;