import React from 'react';
import TableItem from "./TableItem";

const TableApi = ({services}) => {
    return (
        <div className="table">
            {services.map((service) =>
                <TableItem service={service} key={service.id}/>
            )}
        </div>
    );
};

export default TableApi;