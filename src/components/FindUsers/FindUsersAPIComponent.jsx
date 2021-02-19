import React from 'react';
import FindUsers from './FindUsers';
import Preloader from './../Preloader/Preloader';
import { connect } from 'react-redux';
import { LoginHOC } from '../HOC/LoginHOC';

class FindUsersAPIComponent extends React.Component {
    
    constructor(props){
        super(props);   
    }

   
    componentDidMount(){
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    pageChanged = (numberPage) =>{
        this.props.setCurrentPage(numberPage);
        this.props.getUsersThunk(numberPage, this.props.pageSize);
    }

    render() {
        return (
            <>
            {this.props.isPreloaderShow ? <Preloader/> : null}
            <FindUsers 
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage} 
            pageChanged={this.pageChanged}
            totalCount = {this.props.totalCount}
            users = {this.props.users}
            follow={this.props.follow} 
            unfollow={this.props.unfollow}
            />
            </>
            
        );
    }
}

let FindUsersWithLoginCheck = LoginHOC(FindUsersAPIComponent)

export default FindUsersWithLoginCheck;