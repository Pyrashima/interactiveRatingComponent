import React from 'react';
import Button from '../../button';
import './Submit.css';

const Submit = (props) => {
    return (
        <Button type="submitButton" className="submit">
            {props.children}
        </Button>
    );
}

export default Submit;