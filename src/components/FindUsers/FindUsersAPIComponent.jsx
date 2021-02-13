import axios from 'axios';
import React from 'react';
import FindUsers from './FindUsers';
import Preloader from './../Preloader/Preloader';
import { getUsers, userAPI } from '../../api/api';

class FindUsersAPIComponent extends React.Component {
    
    constructor(props){
        super(props);   
    }

   
    componentDidMount(){
        this.props.togglePreloader(true);
        
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.togglePreloader(false);        
            this.props.setUsers(response.items);
                this.props.setCount(response.totalCount);
            });


        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        // {
        //     withCredentials: true
        // }).then(response => {
        //     this.props.togglePreloader(false);        
        //     this.props.setUsers(response.data.items);
        //         this.props.setCount(response.data.totalCount);
        //     });
    }

    pageChanged = (numberPage) =>{
        this.props.togglePreloader(true);
        this.props.setCurrentPage(numberPage);
        userAPI.getUsers(numberPage, this.props.pageSize).then(response => {
            this.props.togglePreloader(false);   
             this.props.setUsers(response.items);
            this.props.setCount(response.totalCount);
        });

        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`,
        // {
        //     withCredentials: true
        // }).then(response => {
        //     this.props.togglePreloader(false);   
        //      this.props.setUsers(response.data.items);
        //     this.props.setCount(response.data.totalCount);
        // });
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



export default FindUsersAPIComponent;