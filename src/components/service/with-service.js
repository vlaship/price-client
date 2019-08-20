import React from 'react';
import { ServiceConsumer } from './service-context';

const withService = (Wrapped) => {

  return (props) => {
    return (
      <ServiceConsumer>
        <Wrapped {...props} />
      </ServiceConsumer>
    );
  }
};

export default withService;