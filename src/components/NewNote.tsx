import NoteForm from "./NoteForm"

function NewNote() {
    return (
      <>
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">New Note</h1>
        <NoteForm/>
      </>
    )
  }
  
  export default NewNote