import React from 'react';

const CheckBox = ({text, ...rest}) => {
    return (
        <div>
            <label> <input type="checkbox" {...rest} /> <span>{text}</span> </label>
        </div>
    );
};

export default CheckBox;