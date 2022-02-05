import classes from './Messages.module.css';
import { MessagesBlock } from './MessagesBlock/MessagesBlock';
import { Message } from './Message/Message';

const dialogsData = [
    {id: 1, name: "Name 1"},
    {id: 2, name: "Name 1"},
    {id: 3, name: "Name 1"},
    {id: 4, name: "Name 1"},
    {id: 5, name: "Name 1"},
    {id: 6, name: "Name 1"}
]

const messagesData = [
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
                    <MessagesBlock id="1" name="Name 1" />
                    <MessagesBlock id="2" name="Name 2" />
                    <MessagesBlock id="3" name="Name 3" />
                    <MessagesBlock id="4" name="Name 4" />
                    <MessagesBlock id="5" name="Name 5" />
                    <MessagesBlock id="5" name="Name 6" />
                </div>
                <div className="list">
                    <Message text="Hi" />
                    <Message text="How are you doing" />
                    <Message text="Miss you" />
                </div>
            </div>
        </div>
    )
}
