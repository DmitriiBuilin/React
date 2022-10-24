import './Message.css'

export const Message = ({text}) => {
    return <div className="message-text">
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quae rerum assumenda odit quam iusto quis corporis.       
        </p>
        <p>{text}</p>
    </div>


}