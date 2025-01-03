import { useContext } from 'react';
import { NoteContext } from '../../context/Note.context';

export default function Note({ noteInfo, setCheck }) {
  const { deleteNote, setOpenModal } = useContext(NoteContext);

  console.log(noteInfo);
  function handleUpdate() {
    setCheck('update'.toLowerCase());
    setOpenModal(true);
  }
  const { _id: id, title, content } = noteInfo;
  return (
    <>
      <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
        <h2 className="tilte text-white font-bold capitalize mb-2 pb-1 border-b-2 border-slate-400">
          {title}
        </h2>
        <p className="description text-slate-200 line-clamp-4">{content}</p>
        <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
          <i
            onClick={handleUpdate}
            className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"
          ></i>
          <i
            onClick={() => {
              deleteNote({ noteId: id });
            }}
            className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"
          ></i>
        </div>
      </div>
    </>
  );
}
