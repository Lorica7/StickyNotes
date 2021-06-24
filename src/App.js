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

  searchNotes = (note) => {
    const lowerN = note.description.toLowerCase();
    const doesInclude = lowerN.includes(this.state.searchText)
   
    if (!doesInclude) {
      note.doesMatchSearch = false
    } else {
      note.doesMatchSearch = true
    }
   
    return note
   
  }

  onSearch = (e) => {
    const searchTerm = e.target.value
    searchTerm.toLowerCase();
    this.setState ({ searchText: searchTerm })
      const searchedNotes = this.state.notes.map(this.searchNotes)
  console.log(searchedNotes)
  }
  
  onDelete = (targetId) => {
    const copyD = []
    const stateNotesD = this.state.notes
    for (let noteItem of stateNotesD) {
      if (noteItem.id !== targetId) {
       copyD.push(noteItem)
      } 
   } this.setState({notes: copyD})
  }

	
componentDidUpdate = ()=> {
   const stateString = JSON.stringify(this.state);
  localStorage.setItem("stateString", stateString);

  }
  
  componentDidMount = () => {
    const storedInfo = localStorage.getItem("stateString")
    if (storedInfo) {
      const parsedInfo = JSON.parse(storedInfo)
      this.setState(parsedInfo)
      console.log(parsedInfo)
    }
  }
    
  
  render() {
    return (
      <div>
        <Header onSearch={this.onSearch} addNote={this.addNote} searchText={this.state.searchText}/>
        <NotesList notes={this.state.notes} onType={this.onType} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default App;
