import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Homepage from '../page/Homepage/Homepage';
import Loginpage from '../page/Loginpage/Loginpage';
import Datalore from '../page/Datalore/Datalore';
import SoglPage from '../page/SoglPage/SoglPage';
import MyTask from '../page/MyTask/MyTask';


const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {link: "/", element: <Homepage />, id: 1},
        {link: "/login", element: <Loginpage />, id: 2},
        {link: "/datalore", element: <Datalore />, id: 3},
        {link: "/sogl/:ok", element: <SoglPage />, id: 4},
        {link: "/mytask", element: <MyTask />, id: 5},
        {link: "/", element: <Homepage />, id: 1},
    ];

    return(
        <Routes>
            {PUBLIC_ROUTES.map(item => (
                <Route path={item.link} element={item.element} key={item.id} />
            ))}
        </Routes>
    )
}

export default MainRoutes;