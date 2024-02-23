import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'; 
import AdminPanelRoutes from '../src/Routes/AppRouter';

ReactDOM.render(
    <Router>
      <AdminPanelRoutes />
    </Router>
    ,document.getElementById('root')
);

reportWebVitals(console.log); 