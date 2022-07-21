import React from 'react';
import User from "./User/User";
import Pagination from "../Pagination/Pagination";
import { UserType } from "../../types/types";

type PropsType = {
    users: Array<UserType>
    usersTotal: number
    usersPageLimit: number
    usersCurrentPage: number
    handlePageChange: (page: number) => void
    fetchingItems: () => void
    setFollowUser: () => void
}

const Users: React.FC<PropsType> = (
    {
        users,
        usersTotal,
        usersPageLimit,
        usersCurrentPage,
        handlePageChange,
        fetchingItems,
        setFollowUser
    }) => {

    return (
        <div>
            {users.map(user => (
                <User
                    key={user.id}
                    user={user}
                    fetchingItems={fetchingItems}
                    setFollowUser={setFollowUser} />
            ))}
            <Pagination
                total={usersTotal}
                pageLimit={usersPageLimit}
                currentPage={usersCurrentPage}
                handlePageChange={handlePageChange} />
        </div>
    )
}

export default Users;
