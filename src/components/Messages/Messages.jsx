import classes from './Messages.module.css';
import { MessagesBlock } from './MessagesBlock/MessagesBlock';
import { Message } from './Message/Message';

export const Messages = ({ dialogs, messages }) => {
    return (
        <div>
            <h1>Messages</h1>
            <div className={classes.columns}>
                <div className="blocks">
                    {dialogs.map(item => <MessagesBlock id={item.id} name={item.name} />)}
                </div>
                <div className="list">
                    {messages.map(item => <Message text={item.message} />)}
                </div>
            </div>
        </div>
    )
}
