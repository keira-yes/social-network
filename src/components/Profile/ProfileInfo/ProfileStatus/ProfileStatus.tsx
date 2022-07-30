import React, { ChangeEvent, useEffect, useState } from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = ({ status, updateStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(status);
    }, [status]);

    const changeMode = () => {
        setEditMode(!editMode);
    }

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
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
