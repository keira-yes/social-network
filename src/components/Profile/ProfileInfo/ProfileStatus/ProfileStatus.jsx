import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    changeMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    changeInput = (e) => {
        this.setState({
            status: e.target.value
        });
    }

    handleUpdateStatus = () => {
        this.changeMode();
        this.props.updateStatus(this.state.status);
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <div>
                        <input
                            type="text"
                            value={this.state.status}
                            autoFocus={true}
                            onChange={this.changeInput}
                            onBlur={this.handleUpdateStatus} />
                    </div> :
                    <div onDoubleClick={this.changeMode}>
                        {this.props.status ? this.props.status : 'Enter status...'}
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;