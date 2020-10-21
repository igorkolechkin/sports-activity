import React from 'react';
import { connect } from 'react-redux';
import Login from '@components/PageLogin';
import { compose } from 'redux';

class PageLogin extends React.Component {

  render() {
    return (
      <>
        <h1 className='page-title'>{ this.props.pageTitle }</h1>
        <Login />
      </>
    )
  }
}

const mapStateToProps = props => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(PageLogin)