import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUsers } from '@store/actions/usersAction';
import UsersListItem from '@components/PageUsers/UsersListItem';
import Loader from '@components/UI/Loader';
import styles from './index.module.scss';

class PageFriends extends React.Component {
  componentDidMount() {
    this.props.addUsers();
  }

  render() {
    return (
      <>
        <h1 className='page-title'>{ this.props.pageTitle }</h1>

        <div className={ styles.content }>
          {
            this.props.loaded
              ? <ul className={ styles.list }>
                { this.props.users.map(user =>  {
                  return <UsersListItem key={ user.id } name={ user.name } imgUrl={ user.photos.large } followed={ user.followed } />
                } )}
              </ul>
              : <Loader />
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = props => {
  return {
    loaded: props.usersReducer.loaded,
    users: props.usersReducer.users
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageFriends);