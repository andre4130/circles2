import React from 'react';

const Output = ({reverseString}) => {

    return (
        <div className="output">
            <fieldset style={{width: '45%'}}>
            <legend>Your Reversed String...</legend>
            <p>{reverseString}</p>
            </fieldset>
        </div>
    );
};

export default Output;