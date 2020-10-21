import React from 'react';
import { connect } from 'react-redux';
import { setUsersFetch, setCurrentUsersPage, toggleFollowUserThunk } from '@store/actions/usersAction';
import UsersList from '@components/PageUsers/UsersList';
import Loader from '@components/UI/Loader';
import Pagination from '@components/UI/Pagination';
import styles from './index.module.scss';
import { compose } from 'redux';
import isAuthRedirect from '@services/isAuthRadirect';

class PageFriends extends React.Component {
  componentDidMount() {
    this.props.dispatch(setUsersFetch());
  }

  paginationItemHandler = item => {
    const currentPage = parseInt(item.innerText);

    this.props.setCurrentUsersPage(currentPage);
    this.props.dispatch(setUsersFetch(this.props.usersCount, currentPage));
  }

  renderPagination() {
    let pages = [];

    for (let i = 1; i <= this.props.pageCount; i++) {
      if (i <= 10) pages.push({ id: `usersPage${i}`, name: i, isCurrent: i === this.props.currentPage });
    }

    return <Pagination pages={ pages } clickHandler={ this.paginationItemHandler } />
  }

  render() {
    return (
      <>
        <h1 className='page-title'>{ this.props.pageTitle }</h1>

        <div className={ styles.content }>
          {
            this.props.loaded
              ? <Loader />
              : <UsersList users={ this.props.users }
                           followingUsersList={ this.props.followingUsersList }
                           toggleFollowUserHandler={ this.props.toggleFollowUserThunk }
                />
          }
        </div>

        <div className={ styles.nav }>
          { this.renderPagination() }
        </div>
      </>
    )
  }
}

const mapStateToProps = props => {
  return {
    loaded: props.usersReducer.loaded,
    users: props.usersReducer.users,
    currentPage: props.usersReducer.currentPage,
    usersCount: props.usersReducer.usersCount,
    pageCount: props.usersReducer.totalCount / props.usersReducer.usersCount,
    followingUsersList: props.usersReducer.followingUsersList
  }
}

export default compose(
  connect(mapStateToProps, {
    setCurrentUsersPage, toggleFollowUserThunk
  }),
  isAuthRedirect
)(PageFriends)