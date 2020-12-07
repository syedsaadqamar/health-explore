import React, { useState } from 'react';
import styles from './../../styles/Home.module.css';
import { connect } from 'react-redux';
const SearchInput = ({ jobsList }) => {
  const [jobs, setJobs] = useState([]);

  const filter = e => {
    const searchText = e.target.value.toLowerCase();
    const filteredData = [];
    for(const job of jobsList) {
      if (job.name.toLowerCase().includes(searchText)) {
        filteredData.push(job);
      }
    }
    setJobs(filteredData);
  }

  console.log({ jobs });

  return (
    <div className={styles.searchContainer}>
      <img src="https://simpleicon.com/wp-content/uploads/active-search.png" width="20" className={styles.searchIcon}/>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for any job, title, keywords or company"
        onChange={filter}
        />
    </div>
  );
}

const mapStateToProps = state => ({
  jobsList: state.job.jobsList,
});
export default connect(mapStateToProps, null)(SearchInput);

