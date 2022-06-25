import React from "react";
import { connect } from "react-redux";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import {
    getUsers,
    setCurrentPage,
    setFollowUser
} from "../../redux/reducers/usersReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        const { getUsers, usersCurrentPage, usersPageLimit } = this.props;
        getUsers(usersCurrentPage, usersPageLimit);
    }

    handlePageChange = (page) => {
        const { setCurrentPage, getUsers, usersPageLimit } = this.props;

        setCurrentPage(page);
        getUsers(page, usersPageLimit);
    }

    render() {
        return <>
            {this.props.isLoading && <Preloader />}
            <Users
                users={this.props.users}
                usersTotal={this.props.usersTotal}
                usersPageLimit={this.props.usersPageLimit}
                usersCurrentPage={this.props.usersCurrentPage}
                handlePageChange={this.handlePageChange}
                fetchingItems={this.props.fetchingItems}
                setFollowUser={this.props.setFollowUser}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        usersTotal: state.usersReducer.usersTotal,
        usersPageLimit: state.usersReducer.usersPageLimit,
        usersCurrentPage: state.usersReducer.usersCurrentPage,
        isLoading: state.usersReducer.isLoading,
        fetchingItems: state.usersReducer.fetchingItems
    }
}

export default connect(mapStateToProps,
    { getUsers, setCurrentPage, setFollowUser })(UsersContainer);
