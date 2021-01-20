import React from 'react';

const Input = ({handleChange}) => {
    return (
        <div className="input">
            <p style={{margin: '0px'}}>Your string...</p>
            <input type="text" name='string' onChange={handleChange}/>
        </div>
    );
};

export default Input;