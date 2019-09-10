import React from 'react';
import './DogCard.scss';

export default function DogCard(props) {

  return (
    <div className="dog-card">
      {props.dogs.map(dog => {
        return <img src={dog}></img>
      })}
    </div>
  )
}