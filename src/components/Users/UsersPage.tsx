import React from "react";
import { useSelector } from "react-redux";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { selectIsLoading } from "../../redux/selectors/usersSelector";

const UsersPage = () => {
    const isLoading = useSelector(selectIsLoading);

    return <>
        { isLoading && <Preloader /> }
        <Users />
    </>
}

export default UsersPage;
