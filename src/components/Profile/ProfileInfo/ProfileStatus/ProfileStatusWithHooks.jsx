import React, { useEffect, useState } from 'react';
import classes from '../ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) =>  {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const changeStatusInput = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
            {editMode ?
                <div>
                    <input autoFocus={true} onChange={changeStatusInput} onBlur={deactivateEditMode} className={classes.status_input} value={status} type={Text} />
                </div>
                :
                <div>
                    {props.canEditProfile ? <p onClick={activateEditMode}>{props.status}</p> : <p>{props.status}</p>} 
                </div>
            }
           
            </div>
            
        )
    
}

export default ProfileStatusWithHooks;