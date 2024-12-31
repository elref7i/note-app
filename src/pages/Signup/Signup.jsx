import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function Signup() {
  const navigate = useNavigate();
  const passwordRegx = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
  const emailRegx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const phoneRegx = /^(02)?01[0125][0-9]{8}/;
  const ageRegx = /^[1-9][0-9]?$/;
  const validationSchema = Yup.object({
    name: Yup.string().required('* name is required').min(3).max(20),
    email: Yup.string()
      .required('* email is required')
      .matches(emailRegx, '* email not vaild'),
    age: Yup.number()
      .required('age is required')
      .positive('Age not vaild')
      .integer('Age not vaild')
      .test('is-valid-age', 'Age not valid', (value) =>
        ageRegx.test(value?.toString() || '')
      ),
    password: Yup.string()
      .required('* password is required')
      .matches(passwordRegx, '* password not vaild'),
    phone: Yup.string()
      .required('* phone is required')
      .matches(phoneRegx, '* phone not vaild'),
  });
  async function createNewAccount(values) {
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
      name: '',
      email: '',
      password: '',
      age: '',
      phone: '',
    },
    validationSchema,
    onSubmit: createNewAccount,
  });
  return (
    <>
      <section className="container  min-h-[60vh] flex items-center justify-center py-5">
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-5 min-h-fit py-10 mx-auto  w-full sm:w-3/4 md:w-1/2 lg:w-1/4 lg:min-w-[400px] rounded-lg shadow-sm shadow-slate-100"
        >
          <div className="name mx-auto w-3/4">
            <input
              className="name form-control"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your Name"
            />
            {formik.errors.name && formik.touched.name ? (
              <p className="text-red-600">{formik.errors.name}</p>
            ) : (
              <p className="invisible"></p>
            )}
          </div>
          <div className="email mx-auto w-3/4">
            <input
              className="email form-control"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-600">{formik.errors.email}</p>
            ) : (
              <p className="invisible"></p>
            )}
          </div>
          <div className="password mx-auto w-3/4">
            <input
              className="password form-control"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your password"
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-600">{formik.errors.password}</p>
            ) : (
              <p className="invisible"></p>
            )}
          </div>
          <div className="age mx-auto w-3/4">
            <input
              className="age form-control"
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your age"
            />
            {formik.errors.age && formik.touched.age ? (
              <p className="text-red-600">{formik.errors.age}</p>
            ) : (
              <p className="invisible"></p>
            )}
          </div>
          <div className="phone mx-auto w-3/4">
            <input
              className="phone form-control"
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your phone"
            />
            {formik.errors.phone && formik.touched.phone ? (
              <p className="text-red-600">{formik.errors.phone}</p>
            ) : (
              <p className="invisible"></p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 mx-auto block py-3 px-5 rounded-lg text-white text-lg font-bold hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
}
