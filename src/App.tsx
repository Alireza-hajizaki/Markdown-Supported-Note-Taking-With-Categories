import {useMemo} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import { Container } from "react-bootstrap";
import { RawNote , Tag } from "./types/type";
import {useLocalStorage} from "./Hooks/useLocalStorage";

function App() {
  const[notes,setNotes] = useLocalStorage<RawNote[]>('NOTES', [])
  const[tags,setTags] = useLocalStorage<Tag[]>('TAGS', [])

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return {...note , tags: tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  },[notes,tags])

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/new" element={<NewNote />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
