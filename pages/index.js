import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import api from './api';
import Link from 'next/link'
import Modal from 'react-modal';
import SignupModal from './signup';
import LoginModal from './login';
Modal.setAppElement("#__next")
import styles from '../styles/Home.module.css'
import modalStyles from '../styles/Modals.module.css'

export default function Home(props) {

  const [ user, setUser ] = useState({
    username: '',
    password: ''
  })

  const [ modalOpen, setModalOpen ] = useState(false)

  const router = useRouter();

   const handleChange = (e) => {
     // handles input changes and stores them in local state
     setUser({...user, [e.target.name]: e.target.value})
   }

   const handleClick = (e) => {
    setModalOpen(!modalOpen)
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
    <div className={styles.container}>
      <Head>
        <title>Toke Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.formwrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.username}>
              <label htmlFor="username">Username</label>
              <input onChange={handleChange} name='username' value={user.username} id="username" type="text" placeholder='gzathegenius'/>
            </div>
            <div className={styles.password}>
              <label htmlFor="password">Password</label>
              <input onChange={handleChange} name='password' value={user.password} id="password" type="password" placeholder='password'/>
            </div>
            <button type='submit' className={styles.login}>Log in</button>
          </form>
          <div className={styles.maintop}>
              <div className={styles.maintopinfo}>
                  <h1 className={styles.logo}>
                    🌲
                  </h1>
                  <h1 className={styles.hero}>
                    Start finding your canna-balance right now
                  </h1>
                  <div>
                    <h6 className={styles.description}>
                      Join Toke Notes today.
                    </h6>
                  </div>
              </div>
              <div className={styles.maintoplinks}>
                  <Link href="/" as="/signup">
                    <a className={styles.link} onClick={handleClick}>
                      <p className={styles.signup}>
                        <span>Sign up</span>
                      </p>
                    </a>
                  </Link>

                  <Link href="/" as="/login" onClick={handleClick}>
                    <a className={styles.link} onClick={handleClick}>
                      <p className={styles.login}>
                        <span>Log in</span>
                      </p>
                    </a>
                  </Link>
              </div>
          </div>
          <div></div>

        </div>
        <div className={styles.mainmiddle}>
          <div className={styles.nontitle}></div>
          <div className={styles.title}>Toke Notes.</div>
          <div className={styles.features}>
            <div className={styles.description}>
              <span className={styles.icon}>🌲</span>
              <p className={styles.feature}>Log your journey</p>
            </div>
            <div className={styles.description}>
              <span className={styles.icon}>🌲</span>
              <p className={styles.feature}>Track what works</p>
            </div>
            <div className={styles.description}>
              <span className={styles.icon}>🌲</span>
              <p className={styles.feature}>Keep a stash of your favorite products </p>
            </div>
          </div>
          <div></div>
        </div>

        <div className={styles.mainbottom}>
          <div className={styles.mainbottomlinks}>
            <Link href="/" as="/signup">
              <a onClick={handleClick}>
                <p className={styles.secondsignup}><span>Sign up</span></p>
              </a>
            </Link>
            <Link href="/" as="/login">
              <a onClick={handleClick}>
                <p className={styles.secondlogin}><span>Log in</span></p>
              </a>
            </Link>
          </div>
        </div>
        <Modal className={modalStyles.modal} isOpen={modalOpen} onRequestClose={handleClick}>
          {router.asPath == '/signup'? <SignupModal/> : <LoginModal/>}
        </Modal>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerlinks}>
          <a href="">About</a>
          <a href="">Leafly</a>
          <a href="">Cookie Policy</a>
        </div>
        <span
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2021 Emma Zarate{' '}
        </span>
      </footer>
    </div>
  )
}
