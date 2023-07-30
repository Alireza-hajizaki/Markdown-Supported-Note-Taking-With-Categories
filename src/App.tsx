import "bootstrap/dist/css/bootstrap.min.css";
import {useMemo} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
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

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
