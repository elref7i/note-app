import { Label, Modal, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../context/User.context';
import axios from 'axios';
import toast from 'react-hot-toast';
import { NoteContext } from '../../context/Note.context';
export default function AddNoteModel() {
  const [openModal, setOpenModal] = useState(false);
  const { token } = useContext(UserContext);
  const { getNote } = useContext(NoteContext);

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
      console.log(data);
    } catch (error) {
      toast.error('error');
      console.log(error);
    } finally {
      toast.dismiss(loadingToast);
    }
  }
  function onCloseModal() {
    setOpenModal(false);
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
    onSubmit: addNote,
  });

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-yellow-300 hover:bg-yellow-400  font-bold text-lg py-3 px-4 btn"
      >
        {' '}
        <span>
          <i className="fa-solid fa-plus mr-2"></i>
        </span>{' '}
        Add Note
      </button>
      <Modal
        show={openModal}
        className="bg-opacity-35 "
        size="md"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header className="" />
        <Modal.Body className="bg-slate-700 py-5 rounded-md">
          <h3 className="text-xl font-medium mb-5 text-gray-100 dark:text-white">
            Note Content
          </h3>
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="title"
                  className="text-white text-xl font-bold"
                  value="Title"
                />
              </div>
              <TextInput
                type="text"
                id="title"
                placeholder="java Script"
                value={formik.values.title}
                name="title"
                className="!text-slate-700"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.errors.title && formik.touched.title ? (
                <p className="text-red-600">{formik.errors.title}</p>
              ) : (
                <p className="invisible"></p>
              )}
            </div>
            <div>
              <div className="mb-2 block ">
                <Label
                  htmlFor="Discription"
                  className="text-white text-xl font-bold"
                  value="Discription"
                />
              </div>
              <textarea
                id="Discription"
                value={formik.values.content}
                name="content"
                className="w-full !text-slate-700"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Discription"
                required
              ></textarea>
              {formik.errors.content && formik.touched.content ? (
                <p className="text-red-600">{formik.errors.content}</p>
              ) : (
                <p className="invisible"></p>
              )}
            </div>

            <button
              type="submit"
              className="mx-auto block bg-yellow-300 hover:bg-yellow-400 font-medium text-xl py-2 px-5 btn"
            >
              Add Note
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
