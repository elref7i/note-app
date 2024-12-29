import AddNoteModel from '../../Components/AddNoteModel/AddNoteModel';

export default function Home() {
  return (
    <>
      <div className="flex justify-end px-6">
        <AddNoteModel />
      </div>{' '}
      <section className="home"></section>
    </>
  );
}
