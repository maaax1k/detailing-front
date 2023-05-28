import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <div className="main-image">
                <h1>Max.Detailing - луший детейлинг-центр Алматы</h1>
                <p>Мы стали больше, опытнее, круче и открыли еще полноценный Авто Сервис</p>
                <Link to={'/contact'} className="link lr" style={{padding:"5px 10px", backgroundColor: "mediumslateblue", borderRadius:"10px", margin: "0 auto"}}>Записаться</Link>
            </div>
            <div className="plate">
                <div>
                    <h1>Услуги детейлинга и автосервиса</h1>
                    <p>Закрываем 99% потребностей автомобилистов</p>
                </div>
                <Link to={'/service'} className="link lr" style={{padding:"30px 10px", backgroundColor: "mediumslateblue", borderRadius:"10px", margin: "0"}}>Наши Услуги</Link>
            </div>
            <div className="mainContent">
                <div style={{width: "40%"}}>
                    <img src="https://cdn-ru.bitrix24.ru/b24089868/landing/df5/df5cbf6cab06ace616a37fad04a8df87/TI_CAR_1x.png" width="100%" />
                </div>
                <div className="mainInfo">
                    <h1>Почему нас выбирают?</h1>
                    <p>Во-первых, просто потому, что мы крутейшие специалисты, но и ещё:</p>
                    <br/>
                    <br/>
                    <h4 className="attr"><span>✓</span>Чиним, а не ломаем</h4>
                    <h4 className="attr"><span>✓</span>Сдаём автомобиль в срок</h4>
                    <h4 className="attr"><span>✓</span>Стаж механиков от 4 лет и выше</h4>
                    <h4 className="attr"><span>✓</span>Огромное количество оборудования</h4>
                    <h4 className="attr"><span>✓</span>150+ довольных клиентов</h4>
                </div>
            </div>
        </div>
    );
};

export default MainPage;