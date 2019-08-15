import React from 'react';

export default function DogCard(props) {

  return (
    <>
      <h1>DogCard Component</h1>
      {props.dogs.map(dog => {
        return <img src={dog}></img>
      })}
    </>
  )
}