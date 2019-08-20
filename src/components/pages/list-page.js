import React from 'react';
import ProductList from '../product-list';
import { withRouter } from 'react-router-dom';

const ListPage = ({ history }) => {
  return (
    <ProductList
      onItemSelected={(id) => history.push(id)} />
  );
};

export default withRouter(ListPage);
