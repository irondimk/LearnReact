import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';
import {connect} from "react-redux";
import Users from './Users';

let mapStateToProps = (state)=>{
  return{
    dialogsPage: state.dialogsPage.usersdialogs
  }
}
let mapDispatchToProps = (dispatch)=>{
  return {
   
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
