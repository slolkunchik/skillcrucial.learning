import React, { useState, userEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'

const Dummy = (props) => {
  const [counter] = useState(4)
  const { getData: getDataProps } = props
  userEffect(() => {
    getDataProps();
  }, [getDataProps])

  return (
    <div>
      <Head title="Hello" />
      <div> Hello World {counter} </div>
      <div>{JSON.stringify(props.users)} </div>
      <img src={`/tracker/${counter}.gif`} alt="tracker" />
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = state => ({
  user: state.user.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
