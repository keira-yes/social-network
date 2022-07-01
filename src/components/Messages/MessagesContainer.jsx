import { connect } from "react-redux";
import { compose } from "redux";
import Messages from "./Messages";
import { addMessage } from "../../redux/reducers/dialogsReducer";
import WithAuthRedirect from "../hoc/WithAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages
    }
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    WithAuthRedirect
)(Messages);
