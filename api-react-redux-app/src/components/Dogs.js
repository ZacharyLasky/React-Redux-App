import React from 'react';
import { connect } from 'react-redux';
import './Dogs.scss';
import { getData } from '../actions';

function Dogs(props) {

  return (
    <>
      <h1>DOG API APP</h1>
      <button onClick={props.getData}>
        Dog Generator
      </button>
    </>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { getData })(Dogs)