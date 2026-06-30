import { useState,useEffect } from 'react'
import axios from 'axios'


function App() {

  const [notes, setNotes] = useState([
    {
      title: "Loading....",
      
    }
  ])
  function fetchNotes(){
       axios.get('http://localhost:3000/api/notes').then((res)=>{
        setNotes(res.data.notes)
      })
  }

  useEffect(()=>{   //it is used to stop continious rendering of setNotes in notes 
   fetchNotes();
  },[])

  return (
    <>
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
