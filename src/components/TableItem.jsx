import React from 'react';
import {useNavigate} from "react-router-dom";

const TableItem = (props) => {
    const navigate = useNavigate();
    const getDetails = () =>{
        navigate(`/services/${props.service.id}`);
    };
    return (
        <div className="table-cell" onClick={getDetails}>
            <img className="pic" src={props.service.image} alt=""></img>
            <p className="BIG">{props.service.name}</p>
            <p>{props.service.description}</p>
        </div>
    );
};

export default TableItem;