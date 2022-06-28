import { useState } from "react";

const ProfileStatus = ({ status, updateStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         });
    //     }
    // }

    const changeMode = () => {
        setEditMode(!editMode);
    }

    const changeInput = (e) => {
        setLocalStatus(e.target.value);
    }

    const handleUpdateStatus = () => {
        changeMode();
        updateStatus(localStatus);
    }

    return (
        <>
            {editMode ?
                <div>
                    <input
                        type="text"
                        value={localStatus}
                        autoFocus={true}
                        onChange={changeInput}
                        onBlur={handleUpdateStatus} />
                </div> :
                <div onDoubleClick={changeMode}>
                    {status ? status : 'Enter status...'}
                </div>
            }
        </>
    )
}

export default ProfileStatus;