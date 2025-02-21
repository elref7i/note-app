import { Label, Modal, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { NoteContext } from '../../context/Note.context';
// eslint-disable-next-line react/prop-types
export default function AddNoteModel({ check, setCheck }) {
  const { openModal, setOpenModal, formik } = useContext(NoteContext);

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <button
        onClick={() => {
          setOpenModal(true);
          setCheck('add'.toLowerCase());
        }}
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
            {check === 'add'.toLowerCase() ? (
              <button
                type="submit"
                className="mx-auto block bg-yellow-300 hover:bg-yellow-400 font-medium text-xl py-2 px-5 btn"
              >
                Add Note
              </button>
            ) : (
              <button
                type="submit"
                className="mx-auto block bg-yellow-300 hover:bg-yellow-400 font-medium text-xl py-2 px-5 btn"
              >
                Update Note
              </button>
            )}
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
