import React from 'react'
import Note from "./Note.js"

const NotesList = (props) => {
    return (

        <ul className="notes-list">
            {
                props.notes.map((note) => {
                    if (note.doesMatchSearch)
                        return (<Note title={note.title} description={note.description} key={note.id} onType={props.onType} id={note.id}/>)

                })
            }

        </ul>

    )
}

export default NotesList
