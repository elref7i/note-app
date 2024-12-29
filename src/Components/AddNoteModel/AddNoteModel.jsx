import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';

export default function AddNoteModel() {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

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
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-100 dark:text-white">
              Note Content
            </h3>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="title"
                  className="text-white text-xl font-bold"
                  value="Title"
                />
              </div>
              <TextInput
                id="title"
                placeholder="java Script"
                // value=""
                className="!text-slate-700"
                onChange=""
                required
              />
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
                className="w-full text-slate-700"
                placeholder="Discription"
                required
              ></textarea>
            </div>

            <div>
              <button className="mx-auto block bg-yellow-300 hover:bg-yellow-400 font-medium text-xl py-2 px-5 btn">
                Add Note
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
