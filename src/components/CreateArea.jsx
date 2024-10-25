import React,{useState} from "react";

function CreateArea(props) {

  const [noteValues , setNoteValues] = useState({
    title :"",
    content :""
  })

  function handleClick(events){
    props.onClickAdd(noteValues);
    setNoteValues({title:"",content:""})
    events.preventDefault();
    
  }

  function handleChange(events){
    const {name , value} = events.target;

    setNoteValues((prev)=>{
      return {...prev,
        [name]: value 
      }
    })

  }

  return (
    <div>
      <form>
        <input name="title" onChange = {handleChange} placeholder="Title" />
        <textarea name="content" onChange = {handleChange} placeholder="Take a note..." rows="3" />
        <button onClick = {handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
