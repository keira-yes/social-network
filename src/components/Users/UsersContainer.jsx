import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Users } from "./Users";
import { getUsersCreator, setUsersTotalCreator, toggleFollowUserCreator, setCurrentPageCreator } from "../../redux/reducers/usersReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        const { usersCurrentPage, usersPageLimit, setUsers, setUsersTotal } = this.props;
        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${usersCurrentPage}&count=${usersPageLimit}`).then(({ data }) => {
            setUsers(data.items);
            setUsersTotal(data.totalCount);
        });
    }

    handlePageChange = (page) => {
        const { setCurrentPage, usersPageLimit, setUsers } = this.props;
        setCurrentPage(page);

        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${usersPageLimit}`).then(({ data }) => {
            setUsers(data.items);
        });
    }

    render() {
        return <Users
            users={this.props.users}
            usersTotal={this.props.usersTotal}
            usersPageLimit={this.props.usersPageLimit}
            usersCurrentPage={this.props.usersCurrentPage}
            toggleFollowUser={this.props.toggleFollowUser}
            handlePageChange={this.handlePageChange}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        usersTotal: state.usersReducer.usersTotal,
        usersPageLimit: state.usersReducer.usersPageLimit,
        usersCurrentPage: state.usersReducer.usersCurrentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(getUsersCreator(users))
        },
        setUsersTotal: (total) => {
            dispatch(setUsersTotalCreator(total))
        },
        toggleFollowUser: (userID) => {
            dispatch(toggleFollowUserCreator(userID))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageCreator(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
