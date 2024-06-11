import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validateSchema = Yup.object().shape({
  nombre: Yup.string().required('El nombre es requerido').max(10, 'El nombre no puede tener mas de 10 caracteres').min(3, 'El nombre no puede tener menos de 3 caracteres'),
  password: Yup.string(),
})

function App() {
  const handleSubmit = (values: any) => {
    console.log('enviando formik', values)
  }
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Formik
        initialValues={{
          nombre: '',
          password: '',
        }}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          console.log('enviando formik', values)
          handleSubmit(values)
        }}
      >
        {({ handleChange, values, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit} className='formulario'>
            <p> {JSON.stringify(values)}</p>
            <div>
              <label htmlFor='nombre'>Nombre</label>
              <input value={values.nombre} onChange={handleChange} type='text' name='nombre' id='nombre' placeholder='nombre' />
              <span>{errors.nombre}</span>
            </div>
            <div>
              <label htmlFor='password'>Clave</label>
              <input value={values.password} onChange={handleChange} type='password' name='password' id='password' placeholder='nombre' />
              <span>{errors.password}</span>
            </div>
            <button type='submit'>enviar</button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default App
