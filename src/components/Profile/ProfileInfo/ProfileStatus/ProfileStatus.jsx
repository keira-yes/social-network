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
        return (
            <>
                {this.state.editMode ?
                    <div><input type="text" value={this.props.status} autoFocus={true} onBlur={this.handleChangeMode} /></div> :
                    <div onDoubleClick={this.handleChangeMode}>{this.props.status}</div>
                }
            </>
        )
    }
}

export default ProfileStatus;