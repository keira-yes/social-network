import { connect } from "react-redux";
import { addPost, updatePost } from "../../../redux/reducers/profileReducer";
import { Posts } from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

export default connect(mapStateToProps, { addPost, updatePost })(Posts);
