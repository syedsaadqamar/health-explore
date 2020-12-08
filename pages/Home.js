import NavBar from './components/NavBar';
import SearchInput from './components/SearchInput';
import LeftContent from './components/LeftContent';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  )
}
