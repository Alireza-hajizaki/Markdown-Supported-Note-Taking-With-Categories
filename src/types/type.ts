export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id : string
} & RawNoteData

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

export type NewNoteProps = {
  onSubmit : (data : NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

export type NoteFormProps = {
  onSubmit : (data : NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

export type SimplifedNote = {
  tags: Tag[];
  title: string;
  id: string;
}

export type NoteListProps = {
  availableTags : Tag[];
  notes : SimplifedNote[]
}

