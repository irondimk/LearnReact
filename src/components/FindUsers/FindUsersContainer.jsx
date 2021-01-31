import {connect} from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCountUsersAC, setCurrentPageAC, togglePreloaderAC } from "../../redux/users-reducer";
import FindUsersAPIComponent from './FindUsersAPIComponent';

let mapStateToProps = (state)=>{
    return{
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isPreloaderShow : state.usersPage.isPreloaderShow
    }
  }
  // let mapDispatchToProps = (dispatch)=>{
  //   return {
  //     follow : (id) => {dispatch(followAC(id))},
  //     unfollow : (id) => {dispatch(unfollowAC(id))},
  //     setUsers : (users) => {dispatch(setUsersAC(users))},
  //     setCount : (value) => {dispatch(setCountUsersAC(value))},
  //     setCurrentPage : (value) => {dispatch(setCurrentPageAC(value))},
  //     togglePreloader: (value) => {dispatch(togglePreloaderAC(value))}
  //   }
  // }
  
  // const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPIComponent);
  const UsersContainer = connect(mapStateToProps, 
{
      follow : followAC,
      unfollow : unfollowAC,
      setUsers : setUsersAC,
      setCount : setCountUsersAC,
      setCurrentPage : setCurrentPageAC,
      togglePreloader: togglePreloaderAC
    })(FindUsersAPIComponent);
  export default UsersContainer;