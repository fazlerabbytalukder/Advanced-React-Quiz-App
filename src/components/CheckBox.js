import React from 'react';

const CheckBox = ({className, text, ...rest}) => {
    return (
        <div>
            <label className={className}> <input type="checkbox" {...rest} /> <span>{text}</span> </label>
        </div>
    );
};

export default CheckBox;