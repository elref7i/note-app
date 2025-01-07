import { useContext, useEffect, useState } from 'react';
import AddNoteModel from '../../Components/AddNoteModel/AddNoteModel';
import { NoteContext } from '../../context/Note.context';
import Note from '../../Components/note/note';

export default function Home() {
  const { getNote, notes } = useContext(NoteContext);
  const [check, setCheck] = useState('add'.toLowerCase());

  useEffect(() => {
    getNote();
  }, []);
  return (
    <>
      <div className="flex justify-end px-6 mb-10">
        <AddNoteModel check={check} setCheck={setCheck} />
      </div>{' '}
      <section className="home p-5 gap-5 rounded-md shadow-sm shadow-slate-50 grid grid-cols-12 bg-slate-800">
        {notes
          ? notes.map((note) => (
              <Note key={note._id} setCheck={setCheck} noteInfo={note} />
            ))
          : ''}
      </section>
    </>
  );
}
