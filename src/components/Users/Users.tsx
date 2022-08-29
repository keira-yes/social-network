import React, { useEffect } from 'react';
import User from "./User/User";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
    selectFetchingItems, selectIsLoading,
    selectUsers, selectUsersCurrentPage,
    selectUsersPageLimit,
    selectUsersTotal
} from "../../redux/selectors/usersSelector";
import { usersActions, fetchUsers, setFollowUser } from "../../redux/reducers/usersReducer";
import Preloader from "../Preloader/Preloader";
import { useSearchParams } from "react-router-dom";

const Users = () => {
    const users = useSelector(selectUsers);
    const usersTotal = useSelector(selectUsersTotal);
    const usersPageLimit = useSelector(selectUsersPageLimit);
    const usersCurrentPage = useSelector(selectUsersCurrentPage);
    const fetchingItems = useSelector(selectFetchingItems);
    const isLoading = useSelector(selectIsLoading);

    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    const pageParams = Number(searchParams.get('page') || 1);

    const handlePageChange = (page: number) => {
        dispatch(usersActions.setCurrentPage(page));
        dispatch<any>(fetchUsers(page, usersPageLimit));
    }

    useEffect(() => {
        let currentPage = usersCurrentPage;
        if (pageParams > 1) currentPage = pageParams;

        setSearchParams({ page: String(currentPage) });
        dispatch(usersActions.setCurrentPage(currentPage));
        dispatch<any>(fetchUsers(currentPage, usersPageLimit));
    }, []);

    useEffect(() => {
        setSearchParams({ page: String(usersCurrentPage) });
    }, [usersCurrentPage]);

    return (
        <>
            { isLoading && <Preloader /> }
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
        </>
    )
}

export default Users;
