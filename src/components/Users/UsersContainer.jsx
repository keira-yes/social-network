import { connect } from "react-redux";
import { Users } from "./Users";
import { followUserCreator, getUsersCreator, unfollowUserCreator } from "../../redux/reducers/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (users) => {
            dispatch(getUsersCreator(users))
        },
        followUser: (userId) => {
            dispatch(followUserCreator(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowUserCreator(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
