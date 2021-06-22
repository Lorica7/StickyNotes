import React from 'react'

const Note = (props) => {
    return (
        <li className="note">
            <input type="text" placeholder="Title" value={props.title} className="note__title" />
            <textarea placeholder="Description..." value={props.description} className="note__description" />
            <span className="note__delete">X</span>
        </li>

    )
}

export default Note
