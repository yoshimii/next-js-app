import { useState } from 'react';
import api from './api';
import styles from '../styles/Stash.module.css'
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
        <div>
            <h1>Sign up</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.username}>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} name='username' value={user.username} id="username" type="text" placeholder='gzathegenius'/>
                </div>
                <div className={styles.email}>
                    <label htmlFor="email">email</label>
                    <input onChange={handleChange} name='email' value={user.email} id="email" type="email" placeholder='email'/>
                </div>
                <div className={styles.password}>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} name='password' value={user.password} id="password" type="password" placeholder='password'/>
                </div>
                <button type='submit' className={styles.login}>Log in</button>
            </form>
        </div>
    )
}

export default SignupModal;