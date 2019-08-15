import React from 'react';
import { connect } from 'react-redux';
import './Dogs.scss';
import { getData } from '../actions';
import Loader from 'react-loader-spinner';
import DogCard from './DogCard';

function Dogs(props) {

  return (
    <>
      <h1>DOG API APP</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="Tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Dog Generator'
        )}
      </button>
      <DogCard />
    </>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { getData })(Dogs)