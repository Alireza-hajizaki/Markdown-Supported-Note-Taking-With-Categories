import { Form , Stack ,Row , Col , Button, FormGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag , NoteListProps } from "../types/type";
import { useState } from "react";


function NoteList( {availableTags} : NoteListProps ) {

    const [selectedTags , setSelectedTags] = useState<Tag[]>([])

  return (
    <>
    <Row>
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
                <Button variant="primary">Create</Button>
            </Link>
            <Button variant="outline-secondary">Edit Tags</Button>
          </Stack>
        </Col>
    </Row>
    <Form>
        <Row>
            <Col>
              <FormGroup>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text">
                </Form.Control>
              </FormGroup>
            </Col>
            <Col>
            <Form.Group controlId="Tags">
                    <Form.Label>Tags</Form.Label>
                    <ReactSelect
                    value={selectedTags.map(tag => {
                        return {label: tag.label , value: tag.id}
                    })}
                    options={availableTags.map(tag => {
                        return {label: tag.label , value: tag.id}
                    })}
                    onChange={tags => {
                        setSelectedTags(tags.map(tag => {
                            return {label:tag.label , id: tag.value}
                        }))
                    }}
                    isMulti/>
                </Form.Group>
            </Col>
        </Row>
    </Form>
    </>
  )
}

export default NoteList