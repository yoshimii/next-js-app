import { useState } from 'react';
import api from './api';
import { useRouter } from 'next/router'
import modalStyles from '../styles/Modals.module.css'

const LoginModal = (props) => {
    const router = useRouter();
    const [ user, setUser ] = useState({
        username: '',
        password: ''
      })
      const handleChange = (e) => {
        // handles input changes and stores them in local state
        setUser({...user, [e.target.name]: e.target.value})
      }
  
      const handleSubmit = (e) => {
       e.preventDefault()
       api.post('auth/login', user)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            router.push('/stash')
       })
        .catch(e => console.log('ERROR: ', e))
            setUser({
                username: '', password: ''
            })
      }

    return (
        <>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} name='username' value={user.username} id="username" type="text" placeholder='gzathegenius'/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} name='password' value={user.password} id="password" type="password" placeholder='password'/>
                </div>
                <button type='submit'>Log in</button>
            </form>
        </>
    )
}

export default LoginModal;