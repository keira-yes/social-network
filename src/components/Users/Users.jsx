import React from 'react';
import User from "./User/User";
import Pagination from "../Pagination/Pagination";

const Users = (
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
