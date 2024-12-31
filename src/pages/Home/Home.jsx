import { useContext, useEffect } from 'react';
import AddNoteModel from '../../Components/AddNoteModel/AddNoteModel';
import { NoteContext } from '../../context/Note.context';

export default function Home() {
  const { getNote, notes, setOpenModal, deleteNote, updateNote } =
    useContext(NoteContext);
  useEffect(() => {
    getNote();
  }, []);
  return (
    <>
      <div className="flex justify-end px-6 mb-10">
        <AddNoteModel />
      </div>{' '}
      <section className="home p-5 gap-5 rounded-md shadow-sm shadow-slate-50 grid grid-cols-12 bg-slate-800">
        {notes
          ? notes.map((note) => (
              <div
                key={note._id}
                className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 "
              >
                <h2 className="tilte text-white font-bold capitalize mb-2 pb-1 border-b-2 border-slate-400">
                  {note.title}
                </h2>
                <p className="description text-slate-200 line-clamp-4">
                  {note.content}
                </p>
                <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
                  <i
                    onClick={() => {
                      setOpenModal(true);
                      updateNote({ noteId: note._id });
                    }}
                    className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"
                  ></i>
                  <i
                    onClick={() => {
                      deleteNote({ noteId: note._id });
                    }}
                    className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"
                  ></i>
                </div>
              </div>
            ))
          : ''}
      </section>
    </>
  );
}
