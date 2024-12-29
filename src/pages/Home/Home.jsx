import AddNoteModel from '../../Components/AddNoteModel/AddNoteModel';

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="flex justify-end px-6">
          <AddNoteModel />
        </div>{' '}
      </section>
    </>
  );
}
