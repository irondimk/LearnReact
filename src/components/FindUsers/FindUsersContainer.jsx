import { connect } from "react-redux";
import { followAC, unfollowAC, setCurrentPageAC, getUsersThunk } from "../../redux/users-reducer";
import FindUsersAPIComponent from './FindUsersAPIComponent';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isPreloaderShow: state.usersPage.isPreloaderShow
  }
}

const UsersContainer = connect(mapStateToProps,
  {
    follow: followAC,
    unfollow: unfollowAC,
    setCurrentPage: setCurrentPageAC,
    getUsersThunk: getUsersThunk
  })(FindUsersAPIComponent);


export default UsersContainer;

