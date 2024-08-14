import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5001/update-item/${id}`)
        .then(response => {
          setItem(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the item data:', error);
        });
    }
  }, [id]);

  const formik = useFormik({
    initialValues: {
      image: item?.image || '',
      name: item?.name || '',
      price: item?.price || '',
      description: item?.description || ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      image: Yup.string().required('Image URL is required'),
      name: Yup.string()
        .min(5, 'Name must be at least 5 characters')
        .required('Name is required'),
      price: Yup.number()
        .min(1, 'Price must be greater than 0')
        .required('Price is required'),
      description: Yup.string()
        .min(10, 'Description must be at least 10 characters')
        .required('Description is required')
    }),
    onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
      axios.put(`http://localhost:5001/update-item/${id}`, values)
        .then(response => {
          setStatus({ type: 'success', message: 'Item updated successfully!' });
          resetForm();
          navigate('/home');
        })
        .catch(error => {
          setStatus({ type: 'error', message: 'Error updating item' });
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  if (!item) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Update Item</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            id="image"
            name="image"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="text-danger">{formik.errors.image}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-danger">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-danger">{formik.errors.price}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            id="description"
            name="description"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-danger">{formik.errors.description}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateItem;
