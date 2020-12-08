import React, { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setJobFilteredData } from '../store/job/job.actions';

const SearchInput = ({ jobsFilteredData, setJobFilteredData }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsFilteredData);
  }, [jobsFilteredData])

  const filter = e => {
    const searchText = e.target.value.toLowerCase();
    setJobFilteredData(searchText);
  }
  
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        setJobFilteredData,
    },
    dispatch,
  );

const mapStateToProps = state => ({
  jobsFilteredData: state.job.jobsFilteredData,
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);

