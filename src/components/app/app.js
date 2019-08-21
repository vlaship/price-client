import React from 'react';

import ErrorBoundry from '../service/error-boundry';
import Service from '../../services/service';
import {ServiceProvider} from '../service/service-context';
import Routes from "../routes";

export default function App() {
    return (
        // <ErrorBoundry>
        <ServiceProvider value={new Service()}>
            <Routes/>
        </ServiceProvider>
        //</ErrorBoundry>
    );
}
