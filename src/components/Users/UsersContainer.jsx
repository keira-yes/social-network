import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Users } from "./Users";
import { Preloader } from "../Preloader/Preloader";
import {
    setUsers,
    setUsersTotal,
    toggleFollowUser,
    setCurrentPage,
    setIsLoading
} from "../../redux/reducers/usersReducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        const { usersCurrentPage, usersPageLimit, setUsers, setUsersTotal, setIsLoading } = this.props;
        setIsLoading(true);
        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${usersCurrentPage}&count=${usersPageLimit}`, { withCredentials: true })
            .then(({ data }) => {
                setIsLoading(false);
                setUsers(data.items);
                setUsersTotal(data.totalCount);
            });
    }

    handlePageChange = (page) => {
        const { setCurrentPage, usersPageLimit, setUsers, setIsLoading } = this.props;
        setIsLoading(true);
        setCurrentPage(page);

        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${usersPageLimit}`, { withCredentials: true })
            .then(({ data }) => {
                setIsLoading(false);
                setUsers(data.items);
            });
    }

    render() {
        return <>
            {this.props.isLoading && <Preloader />}
            <Users
                users={this.props.users}
                usersTotal={this.props.usersTotal}
                usersPageLimit={this.props.usersPageLimit}
                usersCurrentPage={this.props.usersCurrentPage}
                toggleFollowUser={this.props.toggleFollowUser}
                handlePageChange={this.handlePageChange}
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
        isLoading: state.usersReducer.isLoading
    }
}

export default connect(mapStateToProps,
    { setUsers, setUsersTotal, toggleFollowUser, setCurrentPage, setIsLoading })(UsersContainer);
