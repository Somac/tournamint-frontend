import React from 'react';

const PageWrapper = children => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='d-none d-xl-flex  col-xl-1'></div>
        <div className='col-12 col-lg-12 col-xl-10'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;