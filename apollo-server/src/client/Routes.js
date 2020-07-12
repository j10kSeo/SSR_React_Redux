import React from 'react';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';
import ContinentsList, { loadContinentsData } from "./components/ContinentsList";

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersList
  },
  {
    loadContinentsData,
    path: '/continents',
    component: ContinentsList
  }
];