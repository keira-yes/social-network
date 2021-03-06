import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { fetchUsers, setCurrentPage, setFollowUser } from "../../redux/reducers/usersReducer";
import {
    selectFetchingItems,
    selectIsLoading,
    selectUsers,
    selectUsersCurrentPage,
    selectUsersPageLimit,
    selectUsersTotal
} from "../../redux/selectors/usersSelector";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/store";

type PropsType = {
    users: Array<UserType>
    usersTotal: number
    usersPageLimit: number
    usersCurrentPage: number
    isLoading: boolean
    fetchUsers: (usersCurrentPage: number, usersPageLimit: number) => void
    setCurrentPage: (page: number) => void
    fetchingItems: () => void
    setFollowUser: () => void
}

const UsersContainer: React.FC<PropsType> = (
    {
        users,
        usersTotal,
        fetchUsers,
        usersCurrentPage,
        usersPageLimit,
        setCurrentPage,
        isLoading,
        fetchingItems,
        setFollowUser
    }) => {

    useEffect(() => {
        fetchUsers(usersCurrentPage, usersPageLimit);
    }, [usersCurrentPage, usersPageLimit])

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        fetchUsers(page, usersPageLimit);
    }

    return <>
        {isLoading && <Preloader />}
        <Users
            users={users}
            usersTotal={usersTotal}
            usersPageLimit={usersPageLimit}
            usersCurrentPage={usersCurrentPage}
            handlePageChange={handlePageChange}
            fetchingItems={fetchingItems}
            setFollowUser={setFollowUser}
        />
    </>
}

const mapStateToProps = (state: AppStateType) => {
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
