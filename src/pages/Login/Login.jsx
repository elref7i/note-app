export default function Login() {
  return (
    <>
      <section className="container  min-h-[60vh] flex items-center justify-center py-5">
        <form className="space-y-5 min-h-fit py-10 mx-auto  w-full sm:w-3/4 md:w-1/2 lg:w-1/4 lg:min-w-[400px] rounded-lg shadow-sm shadow-slate-100 text-center">
          <div className="">
            <input
              className="name form-control"
              type="text"
              name="name"
              placeholder="Enter your Name"
              autoComplete="off"
            />
          </div>
          <div className="">
            <input
              className="email form-control"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 py-3 px-5 rounded-lg text-white text-lg font-bold hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
}
