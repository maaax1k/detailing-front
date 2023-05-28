import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class ServiceRef extends Component{
    constructor(props) {
        super(props);
        this.state = {title: "none"};
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({title: "block"})
        }, 3000)
    }
    render() {
        return (
            <div className="plate">
                <div>
                    <h1>Услуги детейлинга и автосервиса</h1>
                    <p>Закрываем 99% потребностей автомобилистов</p>
                </div>
                <Link to={'/service'} className={this.state.title} style={{padding:"30px 10px", backgroundColor: "mediumslateblue", borderRadius:"10px", margin: "0"}}>Наши Услуги</Link>
            </div>
        );
    }
};