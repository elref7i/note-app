import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Login() {
  const navigate = useNavigate();

  const passwordRegx = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const emailRegx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('* email is required')
      .matches(emailRegx, '* email not vaild'),
    password: Yup.string()
      .required('* password is required')
      .matches(passwordRegx, '* password not vaild'),
  });
  async function sendDataLogin(values) {
    const loadingToast = toast.loading('Watting');
    try {
      const options = {
        url: 'https://note-sigma-black.vercel.app/api/v1/users/signIn',
        method: 'POST',
        data: values,
      };

      const { data } = await axios.request(options);
      if (data.msg === 'done') {
        toast.success('done');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
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
      email: '',
      password: '',
    },
    validationSchema,

    onSubmit: sendDataLogin,
  });
  return (
    <>
      <section className="container  min-h-[60vh] flex items-center justify-center py-5">
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-5 min-h-fit py-10  w-full sm:w-3/4 md:w-1/2 lg:w-1/4 lg:min-w-[400px] rounded-lg shadow-sm shadow-slate-100"
        >
          <div className="email mx-auto w-3/4">
            <input
              className="email form-control mb-1"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              autoComplete="off"
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-600">{formik.errors.email}</p>
            ) : (
              <p className="invisible"></p>
            )}
          </div>
          <div className="password mx-auto w-3/4">
            <input
              className="password form-control mb-1"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your Name"
              autoComplete="off"
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-600">{formik.errors.password}</p>
            ) : (
              <p className="invisible"></p>
            )}
          </div>
          <button
            type="submit "
            className="bg-blue-600 mx-auto block py-3 px-5 rounded-lg text-white text-lg font-bold hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
}
