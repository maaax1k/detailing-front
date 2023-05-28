import React from 'react';

const Details = (service) => {
    return (
        <div className="serviceDetail">
            <h1>{service.service.name}</h1>
            <p>{service.service.full}</p>
            <img src={service.service.full_img} alt=""/>
        </div>
    );
};

export default Details;