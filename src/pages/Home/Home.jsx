import { useContext, useEffect } from 'react';
import AddNoteModel from '../../Components/AddNoteModel/AddNoteModel';
import { NoteContext } from '../../context/Note.context';

export default function Home() {
  const { getNote } = useContext(NoteContext);
  useEffect(() => {
    getNote();
  }, []);
  return (
    <>
      <div className="container">
        <div className="flex justify-end px-6 mb-10">
          <AddNoteModel />
        </div>{' '}
        <section className="home p-5 gap-5 rounded-md shadow-sm shadow-slate-50 grid grid-cols-12 bg-slate-800">
          <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
            <h2 className="tilte text-white font-bold capitalize">
              ahmed refai
            </h2>
            <p className="description text-slate-200 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              eius.
            </p>
            <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
              <i className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"></i>
              <i className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"></i>
            </div>
          </div>
          <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
            <h2 className="tilte text-white font-bold capitalize">
              ahmed refai
            </h2>
            <p className="description text-slate-200 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              eius.
            </p>
            <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
              <i className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"></i>
              <i className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"></i>
            </div>
          </div>
          <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
            <h2 className="tilte text-white font-bold capitalize">
              ahmed refai
            </h2>
            <p className="description text-slate-200 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              eius.
            </p>
            <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
              <i className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"></i>
              <i className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"></i>
            </div>
          </div>
          <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
            <h2 className="tilte text-white font-bold capitalize">
              ahmed refai
            </h2>
            <p className="description text-slate-200 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              eius.
            </p>
            <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
              <i className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"></i>
              <i className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"></i>
            </div>
          </div>
          <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
            <h2 className="tilte text-white font-bold capitalize">
              ahmed refai
            </h2>
            <p className="description text-slate-200 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              eius.
            </p>
            <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
              <i className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"></i>
              <i className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"></i>
            </div>
          </div>
          <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
            <h2 className="tilte text-white font-bold capitalize">
              ahmed refai
            </h2>
            <p className="description text-slate-200 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              eius.
            </p>
            <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
              <i className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"></i>
              <i className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"></i>
            </div>
          </div>
          <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
            <h2 className="tilte text-white font-bold capitalize">
              ahmed refai
            </h2>
            <p className="description text-slate-200 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              eius.
            </p>
            <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
              <i className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"></i>
              <i className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"></i>
            </div>
          </div>
          <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
            <h2 className="tilte text-white font-bold capitalize">
              ahmed refai
            </h2>
            <p className="description text-slate-200 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              eius.
            </p>
            <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
              <i className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"></i>
              <i className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"></i>
            </div>
          </div>
          <div className="note p-5 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-sm  bg-slate-500 ">
            <h2 className="tilte text-white font-bold capitalize">
              ahmed refai
            </h2>
            <p className="description text-slate-200 line-clamp-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              eius.
            </p>
            <div className="icon-note flex gap-3 pt-5 *:text-lg *:text-white">
              <i className="fa-regular fa-pen-to-square p-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer duration-500 transition-colors text-white rounded-full"></i>
              <i className="fa-solid fa-trash-can p-2 bg-red-500 text-white hover:bg-red-600 duration-500 cursor-pointer transition-colors rounded-full"></i>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
