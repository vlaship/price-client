import React from 'react';
import ProductList from './product-list';
import { withRouter } from 'react-router-dom';

const ListPage = () =>
  <ProductList />;


export default withRouter(ListPage);
