import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    handleChangeMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    render() {
        const status = this.props.status;
        return (
            <>
                {this.state.editMode ?
                    <div><input type="text" value={status} autoFocus={true} onBlur={this.handleChangeMode} /></div> :
                    <div onDoubleClick={this.handleChangeMode}>{status}</div>
                }
            </>
        )
    }
}

export default ProfileStatus;