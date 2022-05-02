import { connect } from "react-redux";
import { Users } from "./Users";
import { followCreator, getUsersCreator, unfollowCreator } from "../../redux/reducers/usersReducer";

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
        follow: (userId) => {
            dispatch(followCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowCreator(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
