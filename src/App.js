import React, { Component } from "react";
import Header from "./Components/Header.js"
import NotesList from "./Components/NotesList.js";

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: "eat",
        description: "put fuel in the tank",
        doesMatchSearch: true
      },
      {
        id: 1,
        title: "sleep",
        description: "eight hours",
        doesMatchSearch: true
      },
      {
        id: 2,
        title: "ABC",
        description: "Always Be Coding",
        doesMatchSearch: true
      }

    ],

    searchText: "",

  };

  addNote =() =>{
    
    console.log("clicked")
  const newNote = {
    id: Date.now(),
    title: "",
    description: "",
    doesMatchSearch: true,
  }
   const newNotes = [...this.state.notes, newNote]
    
     this.setState({ notes: newNotes })
     console.log(this.state)
  }
  
  onType = (targetID, targetFieldT, targetFieldD) => {
   
    const copy = []
    const stateNotes = this.state.notes
    for (let item of stateNotes) {
      if (item.id !== targetID) {
       copy.push(item)
      } else {
        item.title = targetFieldT
        item.description = targetFieldD
        copy.push(item)
     }
   } this.setState({notes: copy})
  }

  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} addNote={this.addNote}/>
        <NotesList notes={this.state.notes} onType={this.onType}/>
      </div>
    );
  }
}

export default App;
