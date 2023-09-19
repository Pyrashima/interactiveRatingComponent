import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <Container className="card">{props.children}</Container>
    );
}

export default Card