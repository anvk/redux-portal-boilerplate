import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>Page not found...</h1>
        </div>
        <p className='lead'>Ooops! But I cannot find the page you are looking for...</p>
      </div>
    );
  }
};

export default NotFoundPage;
