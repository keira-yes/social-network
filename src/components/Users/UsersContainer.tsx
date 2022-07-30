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

type MapStatePropsType = {
    users: Array<UserType>
    usersTotal: number
    usersPageLimit: number
    usersCurrentPage: number
    isLoading: boolean
    fetchingItems: Array<Number>
}

type MapDispatchPropsType = {
    fetchUsers: (usersCurrentPage: number, usersPageLimit: number) => void
    setCurrentPage: (page: number) => void
    setFollowUser: (followed: boolean, id: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: selectUsers(state),
        usersTotal: selectUsersTotal(state),
        usersPageLimit: selectUsersPageLimit(state),
        usersCurrentPage: selectUsersCurrentPage(state),
        isLoading: selectIsLoading(state),
        fetchingItems: selectFetchingItems(state)
    }
}
// TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
    { fetchUsers, setCurrentPage, setFollowUser })(UsersContainer);
