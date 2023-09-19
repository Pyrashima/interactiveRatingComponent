import React from 'react';
import Round from '../round/Round';
import './Rating.css';

const Rating = (props) => {
  const className = props.currenttlyClicked === Number(props.children) ? "active" : "inactive";

  const onClick = () => {
    props.setValue(Number(props.children));
  };

  return (
    <Round className={className} onClick={onClick}>
      {props.children}
    </Round>
  )
}

export default Rating;