import React from 'react';

import ErrorBoundary from '../service/error-boundary';
import Service from '../../services/service';
import {ServiceProvider} from '../service/service-context';
import Routes from "../routes";

export default function App() {
    return (
        <ErrorBoundary>
            <ServiceProvider value={new Service()}>
                <Routes/>
            </ServiceProvider>
        </ErrorBoundary>
    );
}
