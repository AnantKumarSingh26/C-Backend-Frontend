import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [notes, setNotes] = useState([
    {
      title: "Loading....",

    }
  ])
  function fetchNotes() {
    axios.get('http://localhost:3000/api/notes').then((res) => {
      setNotes(res.data.notes)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { title, description } = e.target.elements
    console.log(title, description);
    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    }).then(res=>{
      console.log(res.data);
      fetchNotes();
      alert("Note Created Successfully")

    })

  }

  useEffect(() => {   //it is used to stop continious rendering of setNotes in notes 
    fetchNotes();
  }, [])

  return (
    <>
      <form action="" className="note-create-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter Title" />
        <input name="description" type="text" placeholder="Enter Description" />
        <button>Create Note</button>
      </form>
      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          })
        }

      </div>
    </>
  )
}

export default App
