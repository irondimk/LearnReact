import React, { useEffect, useState } from 'react';
import classes from '../ProfileInfo.module.css';


const ProfileStatus = (props) =>  {

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
            <div className={classes.statusBlock}>
            {editMode ?
                <div>
                    <input autoFocus={true} onChange={changeStatusInput} 
                    onBlur={deactivateEditMode} className={classes.status_input} 
                    value={status} type={Text} />
                </div>
                :
                <div>
                    {/* <p onClick={props.canEditProfile ? activateEditMode : null }>
                        {props.status}
                    </p> */}

                    <p onClick={props.canEditProfile ? activateEditMode : null }
                    className={props.canEditProfile && props.status == "" ? classes.emptyStatus : classes.status}
                    >

                    {props.canEditProfile && props.status == "" ? "Edit status" : props.status}
                        
                    </p>
                </div>
            }
            </div>
        )
    
}

export default ProfileStatus;