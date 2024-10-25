import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [allNotes , setAllNotes ] = useState([
    {title:"Example title", content :"Example Content"}
  ]);

  function addNote(noteValues){
    setAllNotes((prevNotes)=>{
      return (
        [...prevNotes,noteValues]
      )
    })
  }

  function deleteNote(id){
    setAllNotes((prevNotes)=>{
      return prevNotes.filter((note , index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onClickAdd={addNote} />
      {allNotes.map((note, index)=>{
        return <Note key={index} id = {index} title={note.title} content={note.content} delete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
