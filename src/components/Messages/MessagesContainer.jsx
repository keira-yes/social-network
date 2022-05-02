import { connect } from 'react-redux';
import { Messages } from './Messages';
import { addMessageCreator, updateMessageCreator } from "../../redux/reducers/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        dialogsReducer: state.dialogsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator());
        },
        updateMessage: (text) => {
            dispatch(updateMessageCreator(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
