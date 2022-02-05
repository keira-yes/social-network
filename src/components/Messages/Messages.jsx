import classes from './Messages.module.css';
import { MessagesBlock } from './MessagesBlock/MessagesBlock';
import { Message } from './Message/Message';

const dialogs = [
    {id: 1, name: "Name 1"},
    {id: 2, name: "Name 2"},
    {id: 3, name: "Name 3"},
    {id: 4, name: "Name 4"},
    {id: 5, name: "Name 5"},
    {id: 6, name: "Name 6"}
]

const messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you doing"},
    {id: 3, message: "Miss you"}
]

export const Messages = () => {
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
