import React from 'react';
import { withService } from '../hoc-helpers';

import Service from '../../services/service';
import './product-list.css';

const ProductList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="product-list list-group">
      {items}
    </ul>
  );
};

const { findAllByProductName } = new Service();

export default withService(ProductList);
