import classes from './Message.module.css';

export const Message = ({ text }) => {
    return (
        <div className="item">{text}</div>
    )
}
