import styles from './../../styles/Home.module.css';

export default function SearchInput() {
  return (
    <div className={styles.searchContainer}>
      <img src="https://simpleicon.com/wp-content/uploads/active-search.png" width="20" className={styles.searchIcon}/>
      <input type="text" className={styles.searchInput} placeholder="Search for any job, title, keywords or company"/>
    </div>
  );
}
