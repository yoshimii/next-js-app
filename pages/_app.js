import '../styles/globals.css'
import { useRouter } from 'next/router'
import TopAppBar from './topAppBar';
import BottomAppBar from './bottomAppBar';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const noNav = ['/', '/login', '/signup'];
  
  return <>
    {noNav.includes(pathname) ? null : <TopAppBar />}
    <Component {...pageProps} />
    {noNav.includes(pathname) ? null : <BottomAppBar />}
    </>  
}

export default MyApp
