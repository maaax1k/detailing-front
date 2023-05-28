import React from 'react';

const RowApi = ({outsides}) => {
    return (
        <div className="rowApi">
            {outsides.map((outside) =>
                <div key={outside.id}>
                    <h3 style={{textDecoration: "underline", color: "mediumslateblue"}}>{outside.name}</h3>
                    <p style={{color: "gray"}}>{outside.description}</p>
                </div>
            )}
        </div>
    );
};

export default RowApi;