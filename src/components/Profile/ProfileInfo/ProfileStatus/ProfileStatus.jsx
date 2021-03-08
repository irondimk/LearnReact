import React from 'react';
import classes from '../ProfileInfo.module.css';


// let inputStatus = React.createRef();

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }
    
    componentDidMount(){
        this.state.status = this.props.status;
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({status : this.props.status})
        }
    }

    activateEditMode = () =>{
        this.setState(
            {editMode: true}
        )
    }

    deactivateEditMode(){
        this.setState(
            {editMode: false}
        )
        this.props.updateStatus(this.state.status);
    }
   
    changeStatusInput(e){
        this.setState({
            status: e.currentTarget.value
        })
    }

    render(){
        return (
            <div>
            {this.state.editMode ?
                <div>
                    <input onChange={this.changeStatusInput.bind(this)}  autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} className={classes.status_input} value={this.state.status} type={Text} />
                </div>
                :
                <div>
                    <p onClick={this.activateEditMode.bind(this)}>{this.props.status}</p>
                </div>
            }
            </div>
            
        )
    }  
}

export default ProfileStatus;