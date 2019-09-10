import React from 'react';
import { connect } from 'react-redux';
import './Dogs.scss';
import { getData } from '../actions';
import Loader from 'react-loader-spinner';
import DogCard from './DogCard';

function Dogs(props) {

  return (
    <>
      <h1>3-DOG GENERATOR</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="Tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Click To See Dogs'
        )}
      </button>
      <DogCard dogs={props.dogs}/>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    dogs: state.dogs
  }
}

export default connect(mapStateToProps, { getData })(Dogs)