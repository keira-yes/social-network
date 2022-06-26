import React from "react";
import { connect } from "react-redux";
import { Users } from "./Users";
import { Preloader } from "../Preloader/Preloader";
import {
    fetchUsers,
    setCurrentPage,
    setFollowUser
} from "../../redux/reducers/usersReducer";
import {
    getFetchingItems,
    getIsLoading,
    getUsers,
    getUsersCurrentPage,
    getUsersPageLimit,
    getUsersTotal
} from "../../redux/selectors/usersSelector";

class UsersContainer extends React.Component {
    componentDidMount() {
        const { fetchUsers, usersCurrentPage, usersPageLimit } = this.props;
        fetchUsers(usersCurrentPage, usersPageLimit);
    }

    handlePageChange = (page) => {
        const { setCurrentPage, fetchUsers, usersPageLimit } = this.props;

        setCurrentPage(page);
        fetchUsers(page, usersPageLimit);
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
        users: getUsers(state),
        usersTotal: getUsersTotal(state),
        usersPageLimit: getUsersPageLimit(state),
        usersCurrentPage: getUsersCurrentPage(state),
        isLoading: getIsLoading(state),
        fetchingItems: getFetchingItems(state)
    }
}

export default connect(mapStateToProps,
    { fetchUsers, setCurrentPage, setFollowUser })(UsersContainer);
