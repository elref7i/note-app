import { createContext, useContext, useState } from 'react';
import { UserContext } from './User.context';
import axios from 'axios';
import toast from 'react-hot-toast';

export const NoteContext = createContext(0);

// eslint-disable-next-line react/prop-types
export default function NoteProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [notes, setNotes] = useState(null);
  // const [PutID, setPutID] = useState(null);
  const { token } = useContext(UserContext);

  async function addNote(values) {
    const loadingToast = toast.loading('Watting');

    try {
      const options = {
        url: 'https://note-sigma-black.vercel.app/api/v1/notes',
        method: 'POST',
        data: values,
        headers: {
          token: `3b8ny__${token}`,
        },
      };
      const { data } = await axios.request(options);
      if (data.msg === 'done') {
        toast.success('done');
        setOpenModal(false);
        getNote();
      }
      console.log(data);
    } catch (error) {
      toast.error('error');
      console.log(error);
    } finally {
      toast.dismiss(loadingToast);
    }
  }
  async function getNote() {
    try {
      const options = {
        url: 'https://note-sigma-black.vercel.app/api/v1/notes',
        method: 'GET',
        headers: {
          token: `3b8ny__${token}`,
        },
      };
      const { data } = await axios.request(options);
      console.log(data.notes);
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNote({ noteId }) {
    try {
      const options = {
        url: `https://note-sigma-black.vercel.app/api/v1/notes/${noteId}`,
        method: 'DELETE',
        headers: {
          token: `3b8ny__${token}`,
        },
      };
      const { data } = await axios.request(options);
      console.log(data.notes);
      getNote();
    } catch (error) {
      console.log(error);
    }
  }
  // async function updateNote(values) {
  //   const loadingToast = toast.loading('Watting');

  //   try {
  //     const options = {
  //       url: `https://note-sigma-black.vercel.app/api/v1/notes/${PutID}`,
  //       method: 'PUT',
  //       data: values,
  //       headers: {
  //         token: `3b8ny__${token}`,
  //       },
  //     };
  //     const { data } = await axios.request(options);
  //     if (data.msg === 'done') {
  //       toast.success('done');
  //       getNote();
  //     }
  //     console.log(data);
  //   } catch (error) {
  //     toast.error('error');
  //     console.log(error);
  //   } finally {
  //     toast.dismiss(loadingToast);
  //   }
  // }

  return (
    <>
      <NoteContext.Provider
        value={{
          getNote,
          notes,
          setOpenModal,
          openModal,
          deleteNote,
          addNote,
          // setPutID,
        }}
      >
        {children}
      </NoteContext.Provider>
    </>
  );
}
