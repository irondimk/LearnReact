import Dialogs from "./Dialogs"
import {connect} from "react-redux";
import  {LoginHOC}  from "../HOC/LoginHOC";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let DialogsWithHOC = LoginHOC(Dialogs);

const DialogsContainer = connect(mapStateToProps, {})(DialogsWithHOC);


export default DialogsContainer;




