import { connect } from "react-redux";
import { Users } from "./Users";
import { getUsersCreator, toggleFollowUserCreator, setCurrentPageCreator } from "../../redux/reducers/usersReducer";

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
        getUsers: (users) => {
            dispatch(getUsersCreator(users))
        },
        toggleFollowUserCreator: (userID) => {
            dispatch(toggleFollowUserCreator(userID))
        },
        setCurrentPageCreator: (page) => {
            dispatch(setCurrentPageCreator(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
