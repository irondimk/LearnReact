
import React from 'react';
import UserContainer from './User/UserContainer';
import classes from './User/User.module.css';

let FindUsers = (props) => {

    let pagesCount = props.totalCount/props.pageSize;
        let numberPages = [];
        numberPages.push(1);
        for(let i = props.currentPage-5; i< props.currentPage+5; i++){
            if((i<2) || (i>Math.ceil(pagesCount)-1)){
                continue;
            }
            numberPages.push(i);
        }
        numberPages.push(Math.ceil(pagesCount));
    
    return(
        <div className={classes.allUsersPage}>
            <div>
            {
                numberPages.map(elem => {
                    return(<span onClick={()=> props.pageChanged(elem)} className={props.currentPage === elem ? classes.selectedPage : classes.unselectedPage}>{elem} </span>)
                })
            }
                
            </div>
                {
                    props.users.map(elem => {
                        {
                        return (<UserContainer id={elem.id} photos={elem.photos} name={elem.name} status={elem.status} followed={elem.followed} unfollow={props.unfollow} follow={props.follow} />) }
                    })
                }
            </div>
    )
}


export default FindUsers;