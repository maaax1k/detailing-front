import React, {Component} from "react";

export default class Why extends Component{
    state = {
        error: false,
    };

    componentDidCatch(error) {
        this.setState({
            error: true
        });
    }
    render() {
        return (
            <div className="mainContent">
                {this.state.error ? <div>Some error</div> :
                <div style={{width: "40%"}}>
                    <img src="https://cdn-ru.bitrix24.ru/b24089868/landing/df5/df5cbf6cab06ace616a37fad04a8df87/TI_CAR_1x.png" width="100%"  alt=""/>
                </div>}
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
        );
    }
};