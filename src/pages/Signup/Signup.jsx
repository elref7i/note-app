import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  async function createNewAcount(values) {
    const loadingToast = toast.loading('Watting');
    try {
      const options = {
        url: 'https://note-sigma-black.vercel.app/api/v1/users/signUp',
        method: 'POST',
        data: values,
      };

      const { data } = await axios.request(options);
      if (data.msg === 'done') {
        toast.success('done');
        setTimeout(() => {}, 2000);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error('error');
    } finally {
      toast.dismiss(loadingToast);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      age: '',
      phone: '',
    },

    onSubmit: createNewAcount,
  });
  return (
    <>
      <section className="container  min-h-[60vh] flex items-center justify-center py-5">
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-5 min-h-fit py-10 mx-auto  w-full sm:w-3/4 md:w-1/2 lg:w-1/4 lg:min-w-[400px] rounded-lg shadow-sm shadow-slate-100 text-center"
        >
          <div className="">
            <input
              className="name form-control"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your Name"
            />
          </div>
          <div className="">
            <input
              className="email form-control"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
            />
          </div>
          <div className="">
            <input
              className="password form-control"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your password"
            />
          </div>
          <div className="">
            <input
              className="age form-control"
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your age"
            />
          </div>
          <div className="">
            <input
              className="phone form-control"
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
