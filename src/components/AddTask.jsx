/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { AddTodo } from "../store/reducers/TodoListReducer";
function AddTask({ todos }) {
  const dispatch = useDispatch();
  const initialValues = {
    id: "",
    title: "",
    completed: false,
  };
  const validationSchema = Yup.object().shape({
    id: Yup.number(),
    title: Yup.string().required("Title is required"),
    completed: Yup.bool(),
  });
  const handleSubmit = (values, { resetForm }) => {
    values.id = todos.length + 1;
    dispatch(AddTodo(values));
    console.log(values);
    console.log(todos);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form className='m-auto text-center mt-7'>
          <div className='mb-4'>
            <label htmlFor='title' className='mr-2'>
              Title
            </label>
            <Field id='title' name='title' className='border mr-2' />
            {errors.title && touched.title && (
              <span className='text-red-600 font-semibold'>{errors.title}</span>
            )}
          </div>
          <div className='mb-4'>
            <label htmlFor='rating' className='mr-2'>
              Completed?
            </label>
            <Field type='checkbox' name='completed' id='completed' />
            {errors.completed && touched.completed && (
              <span className='text-red-600 font-semibold'>
                {errors.completed}
              </span>
            )}
          </div>
          <button
            type='submit'
            className='rounded-sm py-2 px-3 mb-4 bg-green-200 text-green-950 font-semibold'>
            Add task
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AddTask;
