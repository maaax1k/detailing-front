import React from 'react';
import {Link} from "react-router-dom";
import ServiceRef from "../components/ServiceRef";
import Why from "../components/Why";

const MainPage = () => {
    return (
        <div>
            <div className="main-image">
                <h1>Max.Detailing - луший детейлинг-центр Алматы</h1>
                <p>Мы стали больше, опытнее, круче и открыли еще полноценный Авто Сервис</p>
                <Link to={'/contact'} className="link lr" style={{padding:"5px 10px", backgroundColor: "mediumslateblue", borderRadius:"10px", margin: "0 auto"}}>Записаться</Link>
            </div>
            <ServiceRef/>
            <Why/>
        </div>
    );
};

export default MainPage;