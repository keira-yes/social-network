import { connect } from "react-redux";
import { Users } from "./Users";
import { getUsersCreator, toggleFollowUserCreator } from "../../redux/reducers/usersReducer";

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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
