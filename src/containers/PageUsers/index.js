import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUsers, setCurrentUsersPage, setUsersTotalCount } from '@store/actions/usersAction';
import UsersListItem from '@components/PageUsers/UsersListItem';
import Loader from '@components/UI/Loader';
import Pagination from '@components/UI/Pagination';
import styles from './index.module.scss';

class PageFriends extends React.Component {
  componentDidMount() {
    this.props.setUsersTotalCount();

    this.props.setUsers({
      currentPage: this.props.currentPage,
      usersCount: this.props.usersCount
    });
  }

  paginationItemHandler = (item) => {
    const currentPage = parseInt(item.innerText);

    this.props.setCurrentUsersPage(currentPage);
    this.props.setUsers({
      currentPage: currentPage,
      usersCount: this.props.usersCount
    })
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
              ? <ul className={ styles.list }>
                { this.props.users.map(user =>  {
                  return <UsersListItem key={ user.id } name={ user.name } imgUrl={ user.photos.large } followed={ user.followed } />
                } )}
              </ul>
              : <Loader />
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
    pageCount: props.usersReducer.totalCount / props.usersReducer.usersCount
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setUsers, setCurrentUsersPage, setUsersTotalCount
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageFriends);