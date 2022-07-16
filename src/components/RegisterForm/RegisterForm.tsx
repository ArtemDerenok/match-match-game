import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import avatar from '../../assets/avatar.png';
import styles from './RegisterForm.module.scss';

interface RegisterFormProp {
  show: boolean,
  handleClose: () => void;
}

interface MyFormValues {
  firstName: string,
  lastName: string,
  email: string,
  avatar: Blob | null,
}


function RegisterForm({show, handleClose}: RegisterFormProp) {
  const initialValues: MyFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: null,
  }

  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const setCanvasImage = (img: HTMLImageElement) => {
    const copyImg = img;
    const ctx = canvasRef.current?.getContext('2d');
    copyImg.onload = () => {
      ctx?.drawImage(img, 0, 0, 200, 200)
    }
  }
  
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    const img = document.createElement('img');
    img.src = avatar;
    img.onload = () => {
      ctx?.drawImage(img, 0, 0, 200, 200);
    }
  }, []);
  
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Register new Player</Modal.Title>
    </Modal.Header>

    <Formik initialValues={initialValues} validationSchema={Yup.object({
      firstName: Yup.string().min(2, 'Минимум два символа').required('Поле обязательно для заполнения'),
      lastName: Yup.string().min(2, 'Минимум два символа').required('Поле обязательно для заполнения'),
      email: Yup.string().email('Некорректный адрес электронной почты').required('Поле обязательно для заполнения'),
    })} onSubmit={(values, actions) => {
      console.log({ values, actions });
      handleClose();
    }}
    >
      {({setFieldValue}) => (
        <Form>
        <Modal.Body className='d-flex justify-content-between align-items-center'>
          <div>
            <Field name='firstName' className={styles.field} placeholder='First name' />
            <ErrorMessage name='firstName' component='div' />
            <Field name='lastName' className={styles.field} placeholder='Last name' />
            <ErrorMessage name="lastName" component="div" />
            <Field type='email' name='email' className={styles.field} placeholder='Email' />
            <ErrorMessage name='email' component='div' />
          </div>
          <label htmlFor='file' className={styles.avatar}>
            <input type='file' name='avatar' id='file' className={styles.hidden} onChange={(event) => {
              if (event.target.files?.length) {
                setFieldValue('avatar', event.target.files[0], false)
                const img = new Image();
                img.src = URL.createObjectURL(event.target.files[0]);
                img.classList.add(`${styles.img}`);
                setCanvasImage(img);
              }
            }} />
            <canvas ref={canvasRef} width='200' height='200' className={styles.canvas} />
          </label>
        </Modal.Body>
        <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" type='submit'>
        Add user
      </Button>
        </Modal.Footer>
      </Form>
      )}
    </Formik>

  </Modal>
  )
}

export default RegisterForm;
