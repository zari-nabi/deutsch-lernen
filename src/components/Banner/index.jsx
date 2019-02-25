import React from 'react';

const Banner = () =>(
    <header className="header header-inverse" style={{backgroundImage: 'url(assets/img/learning-german.jpg)'}} data-overlay={8}>
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>Latest Blog Posts</h1>
          <p className="fs-20 opacity-70">Read and get updated on how we progress.</p>
        </div>
      </div>
    </div>
  </header>
);

export default Banner;