import "bootstrap/dist/css/bootstrap.min.css";
import {useMemo} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";
import { Container } from "react-bootstrap";
import { RawNote , Tag , NoteData } from "./types/type";
import {useLocalStorage} from "./Hooks/useLocalStorage";
import { v4 as uuidV4} from "uuid";


function App() {
  const[notes,setNotes] = useLocalStorage<RawNote[]>('NOTES', [])
  const[tags,setTags] = useLocalStorage<Tag[]>('TAGS', [])

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return {...note , tags: tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  },[notes,tags])

  function onCreateNote ({tags , ...data} : NoteData) {
    setNotes( prevNotes => {
      return [
        ...prevNotes,{...data , id:uuidV4() , tagIds: tags.map(tag => tag.id)},
      ]
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev , tag])
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<NoteList/>}></Route>
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags}/>}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
