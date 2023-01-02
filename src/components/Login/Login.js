import './Login.css'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {

    const navigate = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        const regexEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        
        if(email === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los campos no pueden estar vacios',
              })
            return;
        }

        if(email !== '' && !regexEmail.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes escribir una direccion de correo valida',
              })
            return;
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las credenciales son invalidas',
              })
            return;
        }
        
        axios
            .post('http://challenge-react.alkemy.org',{ email, password})
            .then(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Perfecto, ingresaste correctamente',
                  })
                const tokenRecibido = res.data.token
                localStorage.setItem('token', tokenRecibido)
                
                setTimeout(() => {
                     navigate('/listado')
                }, 1500)
            })

    }

    let token = localStorage.getItem('token')

    useEffect(() =>{

        if(token != null) {
            navigate('/listado')
        }
        
    },[navigate]) // eslint-disable-next-line

   
    return (
        <div className='login mt-5'>
            <h1 className='h3 my-3'>Formulario de Login</h1>
            <form className='form' onSubmit={submitHandler}>
                <label className='form-label'>
                    <span>Correo electrónico: </span>
                    <br/>
                    <input className='form' type='text' name='email'/>
                </label>
                <br/>
                <label className='form-label'>
                    <span>Contraseña: </span>
                    <br/>
                    <input className='form' type='password' name='password'/>
                </label>
                <br/>
                <button className='btn btn-success mt-2'>Ingresar</button>
            </form>
        </div>
    )
}

export default Login