import { connect } from "react-redux";
import { compose } from "redux";
import Messages from "./Messages";
import { dialogsActions } from "../../redux/reducers/dialogsReducer";
import WithAuthRedirect from "../hoc/WithAuthRedirect";
import { AppStateType } from "../../redux/store";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages
    }
}

export default compose<any>(
    connect(mapStateToProps, { addMessage: dialogsActions.addMessage }),
    WithAuthRedirect
)(Messages);
