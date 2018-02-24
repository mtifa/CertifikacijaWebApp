import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Polaznici } from './components/Polaznici';
import { FetchCatalogData } from './components/file';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/polaznici' component={ Polaznici } />
    <Route path='/certifikati' component={FetchData} />
    <Route path='/catalog' component={FetchCatalogData} />
</Layout>;
