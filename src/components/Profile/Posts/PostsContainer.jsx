import { connect } from "react-redux";
import {addPostCreator, updatePostCreator} from "../../../redux/reducers/postsReducer";
import { Posts } from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts,
        newPostText: state.postsReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updatePost: (text) => {
            dispatch(updatePostCreator(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
