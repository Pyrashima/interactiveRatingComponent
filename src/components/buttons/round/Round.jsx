import React from 'react';
import './Round.css';
import Button from '../button/Button';

const Round = (props) => {
    const classnames = ["round"];

    if (props.classnames) classnames.push(props.className);

    return (
        <Button onClick={props.onClick} className={classnames.join(" ")}>
            {props.children}
        </Button>
    )
}

export default Round;