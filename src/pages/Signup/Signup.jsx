export default function Signup() {
  return (
    <>
      <section className="container  min-h-[60vh] flex items-center justify-center py-5">
        <form className="space-y-5 min-h-fit py-10 mx-auto  w-full sm:w-3/4 md:w-1/2 lg:w-1/4 lg:min-w-[400px] rounded-lg shadow-lg shadow-slate-400 text-center">
          <div className="">
            <input
              className="name border-[2px] px-3 w-3/4 py-2 focus:border-slate-400 focus:ring-0 border-slate-200 placeholder:text-slate-950 rounded-lg shadow-inherit shadow-md"
              type="text"
              name="name"
              placeholder="Enter your Name"
            />
          </div>
          <div className="">
            <input
              className="email border-[2px] px-3 w-3/4 py-2 focus:border-slate-400 focus:ring-0 border-slate-200 placeholder:text-slate-950 rounded-lg shadow-inherit shadow-md"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="">
            <input
              className="password border-[2px] px-3 w-3/4 py-2 focus:border-slate-400 focus:ring-0 border-slate-200 placeholder:text-slate-950 rounded-lg shadow-inherit shadow-md"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="">
            <input
              className="age border-[2px] px-3 w-3/4 py-2 focus:border-slate-400 focus:ring-0 border-slate-200 placeholder:text-slate-950 rounded-lg shadow-inherit shadow-md"
              type="number"
              name="age"
              placeholder="Enter your age"
            />
          </div>
          <div className="">
            <input
              className="phone border-[2px] px-3 w-3/4 py-2 focus:border-slate-400 focus:ring-0 border-slate-200 placeholder:text-slate-950 rounded-lg shadow-inherit shadow-md"
              type="tel"
              name="phone"
              placeholder="Enter your phone"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 py-3 px-5 rounded-lg text-white text-lg font-bold hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
}
