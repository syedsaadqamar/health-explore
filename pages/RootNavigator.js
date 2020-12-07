import React, { useEffect } from 'react';
import Home from './Home';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import jobsData from '../data/jobs.json';
import { setJobData } from './store/job/job.actions';

const RootNavigator = ({ setJobData }) => {
    useEffect(() => {
        setJobData(jobsData)
    }, [])

    return (
        <Home />
    )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        setJobData,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(RootNavigator);
