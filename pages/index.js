import NavBar from './components/NavBar';
import SearchInput from './components/SearchInput';
import LeftContent from './components/LeftContent';
import JobList from './components/JobList';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <SearchInput />
      <main className={styles.main}>
        <LeftContent />
        <JobList />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
