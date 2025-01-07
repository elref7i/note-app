import { createContext, useContext, useState } from 'react';
import { UserContext } from './User.context';
import axios from 'axios';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export const NoteContext = createContext(0);

// eslint-disable-next-line react/prop-types
export default function NoteProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [notes, setNotes] = useState(null);
  const [PutID, setPutID] = useState(null);
  const [check, setCheck] = useState('add'.toLowerCase());

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
        getNote();
      }
      // console.log(data);
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
      console.log(data);
      setNotes(data.notes);
    } catch (error) {
      console.log(error);
      setNotes(null);
    }
  }

  async function deleteNote({ noteId }) {
    const loadingToast = toast.loading('Watting');

    try {
      const options = {
        url: `https://note-sigma-black.vercel.app/api/v1/notes/${noteId}`,
        method: 'DELETE',
        headers: {
          token: `3b8ny__${token}`,
        },
      };
      const { data } = await axios.request(options);
      if (data.msg === 'done') {
        toast.success('done');
        getNote();
      }
    } catch (error) {
      console.log(error);
      toast.error('error');
    } finally {
      toast.dismiss(loadingToast);
    }
  }

  async function updateNote(values) {
    const loadingToast = toast.loading('Watting');

    try {
      const options = {
        url: `https://note-sigma-black.vercel.app/api/v1/notes/${PutID}`,
        method: 'PUT',
        data: values,
        headers: {
          token: `3b8ny__${token}`,
        },
      };
      const { data } = await axios.request(options);
      if (data.msg === 'done') {
        toast.success('done');
        getNote();
      }
      // console.log(data);
    } catch (error) {
      toast.error('error');
      console.log(error);
    } finally {
      toast.dismiss(loadingToast);
    }
  }
  const validationSchema = Yup.object({
    title: Yup.string().required('required'),
    content: Yup.string().required('required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      check === 'add'.toLowerCase()
        ? await addNote(values)
        : await updateNote(values);
      setOpenModal(false);
      formik.resetForm();
    },
  });

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
          formik,
          setPutID,
          check,
          setCheck,
        }}
      >
        {children}
      </NoteContext.Provider>
    </>
  );
}
