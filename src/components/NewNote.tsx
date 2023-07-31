import NoteForm from "./NoteForm";
import { NewNoteProps } from "../types/type";

function NewNote( {onSubmit , onAddTag , availableTags }: NewNoteProps) {
    return (
      <>
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">New Note</h1>
        <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
      </>
    )
  }
  
  export default NewNote