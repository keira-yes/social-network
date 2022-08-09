import { connect } from "react-redux";
import { profileActions } from "../../../redux/reducers/profileReducer/profileReducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
    }
}

const { addPost } = profileActions;

export default connect(mapStateToProps, { addPost })(Posts);
