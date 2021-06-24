import React, {Component} from 'react'


class Note extends Component {

    changeTitle = (e) => {
        const newT = e.target.value
        const fieldD = this.props.description
        this.props.onType(this.props.id, newT, fieldD)
    }
    
    changeDescription = (e) => {
        const newD = e.target.value
        const fieldT = this.props.title
        this.props.onType(this.props.id, fieldT, newD)
    }

    deleteItem = () => {
        this.props.onDelete(this.props.id)
        console.log(this.props.id)
    }
    render() {
        return (
            <li className="note" id={this.props.id}>
                <input type="text" placeholder="Title" value={this.props.title} className="note__title" onChange={this.changeTitle} />
                <textarea placeholder="Description..." value={this.props.description} className="note__description" onChange={this.changeDescription}  />
                <span className="note__delete" onClick={this.deleteItem}>X</span>
            </li>

        )
    }
}

export default Note
