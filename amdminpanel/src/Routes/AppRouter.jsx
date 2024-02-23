import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Routes/Main';

const AdminPanelRoutes = () => (
    <Routes>
        <Route path="/main" element={<Main/>}/>
    </Routes>
)

export default AdminPanelRoutes;