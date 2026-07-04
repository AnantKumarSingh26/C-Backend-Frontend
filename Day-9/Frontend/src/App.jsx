import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Loading....",
    },
  ]);

  const [editingNote, setEditingNote] = useState(null)
  const [updatedTitle, setupdatedTitle] = useState("")
  const [updatedDescription, setupdatedDescription] = useState("")
  const [showPopup, setshowPopup] = useState(false)

  //Get Method to fetch all notes from DB
  function fetchNotes() {
    axios.get("https://c-backend-frontend.onrender.com/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  // Post Method to Submit new Notes

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    console.log(title, description);
    axios
      .post("https://c-backend-frontend.onrender.com/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
        alert("Note Created Successfully");
      });
  }

  // Delete Method to Delete existing notes from DB

  function handleDeleteNote(noteId) {
    axios.delete("https://c-backend-frontend.onrender.com/api/notes/" + noteId).then((res) => {
      console.log(res.data);
      fetchNotes();
    });
  }

  //Patch method to update existing note in DB

  function handleUpdateNote() {
    axios.patch('https://c-backend-frontend.onrender.com/api/notes/' + editingNote._id
      , { title: updatedTitle, description: updatedDescription }
    ).then(() => {
      fetchNotes();
      setshowPopup(false);
      setEditingNote(null);
    })

  }

  //it is used to stop continious rendering of setNotes in notes
  useEffect(() => {
    fetchNotes();
  }, []);

  return (

    <>
      <form action="" className="note-create-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter Title" />
        <input name="description" type="text" placeholder="Enter Description" />
        <button>Create Note</button>
      </form>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <div className="buttons">
                <button
                  onClick={() => {
                    handleDeleteNote(note._id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setEditingNote(note);
                    setupdatedTitle(note.title)
                    setupdatedDescription(note.description)
                    setshowPopup(true)
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showPopup && (
        <div className="popup">
          <input
            name="title"
            type="text"
            placeholder="Enter Title"
            value={updatedTitle}
            onChange={(e) => setupdatedTitle(e.target.value)}
          />

          <input
            name="description"
            type="text"
            placeholder="Enter Description"
            value={updatedDescription}
            onChange={(e) => setupdatedDescription(e.target.value)}
          />

          <button onClick={handleUpdateNote}>Save</button>
          <button onClick={() => setshowPopup(false)}>
            Cancel
          </button>
        </div>
      )}
    </>


  );
}

export default App;
