import React from 'react';
import { connect } from 'react-redux';
import { setUsers, setCurrentUsersPage, setUsersTotalCount, togglePreloader,
  toggleFollowUser, toggleFollowUserProgress } from '@store/actions/usersAction';
import { samuraiApi } from '@services/requests';
import UsersList from '@components/PageUsers/UsersList';
import Loader from '@components/UI/Loader';
import Pagination from '@components/UI/Pagination';
import styles from './index.module.scss';

class PageFriends extends React.Component {
  componentDidMount() {
    this.totalCountFetch();
    this.usersFetch();
  }

  async totalCountFetch() {
    try {
      const users = await samuraiApi.getUsers(1, this.props.usersCount);
      this.props.setUsersTotalCount(users.data.totalCount);
    } catch (e) {

    }
  }

  async usersFetch(currentPage) {
    try {
      const page = currentPage || this.props.currentPage
      this.props.togglePreloader(true);

      const users = await samuraiApi.getUsers(page, this.props.usersCount);
      this.props.setUsers(users.data.items);

      this.props.togglePreloader(false);
    } catch (e) {

    }
  }

  paginationItemHandler = item => {
    const currentPage = parseInt(item.innerText);

    this.props.setCurrentUsersPage(currentPage);
    this.usersFetch(currentPage);
  }

  renderPagination() {
    let pages = [];

    for (let i = 1; i <= this.props.pageCount; i++) {
      if (i <= 10) pages.push({ id: `usersPage${i}`, name: i, isCurrent: i === this.props.currentPage });
    }

    return <Pagination pages={ pages } clickHandler={ this.paginationItemHandler } />
  }

  toggleFollowUserHandler = async (id, isSubscribe) => {
    try {
      this.props.toggleFollowUserProgress(true, id);

      if (isSubscribe) await samuraiApi.unsubscribe(id);
      else await samuraiApi.subscribe(id);

      this.props.toggleFollowUserProgress(false, id);

      this.props.toggleFollowUser(id)
    } catch (e) {

    }
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
                           toggleFollowUserHandler={ this.toggleFollowUserHandler }
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

export default connect(mapStateToProps, {
  setUsers, setCurrentUsersPage, setUsersTotalCount, togglePreloader, toggleFollowUser, toggleFollowUserProgress
})(PageFriends);