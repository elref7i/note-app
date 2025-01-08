import { useContext, useEffect } from 'react';
import AddNoteModel from '../../Components/AddNoteModel/AddNoteModel';
import { NoteContext } from '../../context/Note.context';
import Note from '../../Components/Note/Note';

export default function Home() {
  const { getNote, notes, check, setCheck } = useContext(NoteContext);

  useEffect(() => {
    getNote();
  }, []);

  return (
    <>
      <div className="flex justify-end px-6 mb-10">
        <AddNoteModel check={check} setCheck={setCheck} />
      </div>{' '}
      {notes ? (
        <section className="home p-5 gap-5 rounded-md shadow-sm shadow-slate-50 grid grid-cols-12 bg-slate-800">
          {notes ? (
            notes.map((note) => (
              <Note key={note._id} setCheck={setCheck} noteInfo={note} />
            ))
          ) : (
            <h1 className="text-3xl text-center font-bold bg-white p-5 rounded-lg">
              Loding...
            </h1>
          )}
        </section>
      ) : (
        ''
      )}
    </>
  );
}
