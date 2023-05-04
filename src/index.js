import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Resume, { Objective } from './mycomponent/Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Resume />
    <Objective />
  </>
);

 
