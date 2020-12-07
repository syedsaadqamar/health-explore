import React, { useEffect } from 'react';
import Home from './Home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import jobsData from '../data/jobs.json';
import filteredData from '../data/filters.json';
import { setJobData } from './store/job/job.actions';
import { setFilterData } from './store/filter/filter.actions';

const RootNavigator = ({ setJobData, setFilterData }) => {
    useEffect(() => {
        setJobData(jobsData)
        setFilterData(filteredData)
    }, [])

    return (
        <Home />
    )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        setJobData,
        setFilterData,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(RootNavigator);
