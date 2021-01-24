import { useState } from 'react';
import api from './api';
import styles from '../styles/Modals.module.css'
import { useRouter } from 'next/router'

const SignupModal = (props) => {
    const router = useRouter();
    const [ user, setUser ] = useState({
        username: '',
        password: '',
        email: ''
      })
      const handleChange = (e) => {
        // handles input changes and stores them in local state
        setUser({...user, [e.target.name]: e.target.value})
      }
  
      const handleSubmit = (e) => {
       e.preventDefault()
       api.post('auth/register', user)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            router.push('/stash')
       })
        .catch(e => console.log('ERROR: ', e))
            setUser({
                username: '', password: '', email: ''
            })
      }

    return (
         <div id='signup-modal' className={`${styles.signupmodal}`}>
            <div className={styles.logo}>🌲</div>
            <h1>Create your account</h1>
            <form className={styles.modalform} onSubmit={handleSubmit}>
                <div className={styles.inputdiv}>
                    <label htmlFor="username">Username</label>
                    <input className={styles.input} onChange={handleChange} name='username' value={user.username} id="username" type="text" placeholder='gzathegenius'required/>
                </div>
                <div className={styles.inputdiv}>
                    <label htmlFor="email">email</label>
                    <input className={styles.input} onChange={handleChange} pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" name='email' value={user.email} id="email" type="email" placeholder='email'/>
                </div>
                <div className={styles.inputdiv}>
                    <label htmlFor="password">Password</label>
                    <input className={styles.input} onChange={handleChange} name='password' value={user.password} id="password" type="password" placeholder='password' required/>
                </div>
                <button type='submit' className={styles.button}>Sign up</button>
            </form>
        </div>
    )
}

export default SignupModal;