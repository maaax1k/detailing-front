import React from 'react';
import MainPage from "../pages/MainPage";
import ContactPage from "../pages/ContactPage";
import FeedbackPage from "../pages/FeedbackPage";
import ServicePage from "../pages/ServicePage";
import ServiceDetail from "../pages/ServiceDetail";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path={'/'} element={<MainPage/>} />
            <Route exact path={'/contact'} element={<ContactPage />} />
            <Route exact path={'/feedback'} element={<FeedbackPage />} />
            <Route exact path={'/service'} element={<ServicePage />} />
            <Route exact path={'/services/:id'} element={<ServiceDetail />} />
        </Routes>
    );
};

export default AppRouter;