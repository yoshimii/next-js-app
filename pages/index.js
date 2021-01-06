import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toke Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.maintop}>
        <h1 className={styles.logo}>
        🌲
        </h1>

        <h1 className={styles.title}>
          Start your canna-balance journey right now
        </h1>

        <div>
        <h6 className={styles.description}>
          Join Toke Notes today.
        </h6>
        </div>

        <a className={styles.link}>
        <p className={styles.signup}>
          <span>Sign up</span>
        </p>
        </a>

        <a className={styles.link}>
        <p className={styles.login}>
          <span>Log in</span>
        </p>
        </a>
        </div>
        <div className={styles.features}>
          <div className={styles.description}>
          <span className={styles.icon}>🌲</span><p className={styles.feature}>Log your journey</p>
          </div>
          <div className={styles.description}>
          <span className={styles.icon}>🌲</span><p className={styles.feature}>Track what works</p>
          </div>
          <div className={styles.description}>
          <span className={styles.icon}>🌲</span><p className={styles.feature}>Keep a stash of your favorite strains </p>
          </div>
        </div>

        <div className={styles.mainbottom}>
          <a href="">
            <p className={styles.secondsignup}><span>Sign up</span></p>
          </a>
          <a href="">
            <p className={styles.secondlogin}><span>Log in</span></p>
          </a>
        </div>
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
