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
    selectFetchingItems,
    selectIsLoading,
    selectUsers,
    selectUsersCurrentPage,
    selectUsersPageLimit,
    selectUsersTotal
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
        users: selectUsers(state),
        usersTotal: selectUsersTotal(state),
        usersPageLimit: selectUsersPageLimit(state),
        usersCurrentPage: selectUsersCurrentPage(state),
        isLoading: selectIsLoading(state),
        fetchingItems: selectFetchingItems(state)
    }
}

export default connect(mapStateToProps,
    { fetchUsers, setCurrentPage, setFollowUser })(UsersContainer);
