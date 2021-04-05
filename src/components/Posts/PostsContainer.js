import Posts from "./Posts";
import {connect} from "react-redux";
import  {LoginHOC}  from "../HOC/LoginHOC";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let PostsWithHOC = LoginHOC(Posts);

const PostsContainer = connect(mapStateToProps, {})(PostsWithHOC);


export default PostsContainer;




