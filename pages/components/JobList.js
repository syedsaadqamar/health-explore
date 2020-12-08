import { useEffect, useState } from 'react';
import styles from './../../styles/Home.module.css';
import Card from 'react-bootstrap/Card';
import { Accordion, Button, Badge, OverlayTrigger, Popover } from 'react-bootstrap';
import DepartmentModal from './DepartmentModal';
import { connect } from 'react-redux';
import { sortByData } from '../constants/constant';


const JobList = ({ filteredList, jobsFilteredData }) => {
  const [sortBy, setSortBy] = useState(sortByData);
  const [jobsCount, setJobsCount] = useState([]);
  const [jobs, changeJobs] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({department: []});

  useEffect(() => {
    changeJobs(jobsFilteredData);
  }, [jobsFilteredData]);


  useEffect(() => {
    let jobSum = 0;
    for (const key in filteredList) {
      jobSum += filteredList[key].map(filter => filter.doc_count).reduce((xDocCount, yDocCount) => xDocCount + yDocCount, 0);
    }
    setJobsCount(jobSum);
  }, [filteredList]);

  const avatarName = (name) => {
    return name.split(" ").slice(0, 2).map(str => str[0]).join("");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  };

  const closeAllFilter = () => {
    return [...sortBy].map(sort => {
      sort.show = false;
      return sort;
    });
  }

  const handleClick = (index) => {
    const updatedSort = closeAllFilter();
    updatedSort[index].show = !updatedSort[index].show;
    setSortBy([...updatedSort]);
  };

  const selectFilterSortBy = (type, index) => {
    const updatedSort = closeAllFilter();
    updatedSort[index].sortByVal = type;
    setSortBy([...updatedSort]);
    fetchDaya();
  }

  const fetchDaya = () => {
    console.log(jobs);
    console.log(sortBy);
  }

  return (
    <div className={styles.jobList}>
      <div className={styles.jobContainer}>
        <span><b>{jobsCount}</b> job postings</span>
        <div className={styles.sortContent}>
          <span className={styles.grey}>Sort by</span>
            {
              sortBy.map((val, index) => (
                <OverlayTrigger
                    trigger="click"
                    show={val.show}
                    key={index+1}
                    placement={'bottom'}
                    overlay={
                      <Popover id={index}>
                        <Popover.Content>
                          <div className={styles.cursorPointer} onClick={() => selectFilterSortBy('asc', index)}>Asscending</div>
                          <div className={styles.cursorPointer} onClick={() => selectFilterSortBy('desc', index)}>Decending</div>
                          <div className={styles.cursorPointer} onClick={() => selectFilterSortBy('', index)}>Remove</div>
                        </Popover.Content>
                      </Popover>
                    }
                  >
                  <span className={styles.sortValues} onClick={() => handleClick(index)} >{val.key}{val.sortByVal && <span className={styles.grey}>{':' + val.sortByVal}</span>}</span>
                </OverlayTrigger>
              ))
            }
        </div>
      </div>
      {
        jobs.map((job, pIndex) => (
          <Accordion key={pIndex}>
            <Card>
              <Card.Header className={styles.accordionCardHeader}>
                <Accordion.Toggle as={Button} variant="link" eventKey={pIndex+1} className={styles.width100}>
                  <div className="d-flex">
                    <h3 className="mb-0">
                      <Badge variant="secondary">{avatarName(job.name)}</Badge>
                    </h3>
                    <div className={styles.accordionCardTitle}>{job.job_title}</div>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={pIndex+1}>
                <div>
                  {
                    job.items.map((item, index) => (
                      <Accordion key={index+'-item'}>
                        <Card className="border-0">
                          <Card.Header className={styles.accordionCardHeader}>
                            <Accordion.Toggle as={Button} variant="link" eventKey={pIndex + index + 1} className={styles.width100}>
                              <Card.Body key={index + 'item'} style={Object.assign({}, ((index + 1) !== job.items.length) ? {borderBottom: '1px solid #ccc', paddingBottom: '0px'} : {}, {textAlign: 'left'})}>
                                <h6 className={styles.black}>{item.job_title}</h6>
                                <div className={styles.accordionCardJobType}>{item.job_type} | ${item.salary_range[0]} - {item.salary_range[1]} an hour | {item.city}</div>
                              </Card.Body>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={pIndex + index + 1}>
                            <Card.Body>
                              <div className={styles.accordionCardBody}>
                                <div className={styles.width80}>
                                  <div className="d-flex justify-content-around">
                                    <b>Department:</b>
                                    <div className={`mb-2 ${styles.width500px}`}>
                                      {
                                        item.department.map((dept, index) => <span key={index}>{dept}{index+1 !== item.department.length && ', '}</span>)
                                      }
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-around">
                                    <b>Hours / shifts:</b>
                                    <div className={`mb-2 ${styles.width500px}`}>{item.work_schedule}</div>
                                  </div>
                                  <div className="d-flex justify-content-around">
                                    <b>Summary:</b>
                                    <div className={styles.width500px}>{item.description}</div>
                                  </div>
                                </div>
                                <div className={styles.width20}>
                                  <div>
                                    <Button variant="primary" onClick={() => openModal(item)}>Job details</Button>
                                  </div>
                                  <div className="mt-2">
                                    <Button variant="outline-primary">Save job</Button>
                                  </div>
                                </div>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion> 
                    ))
                  }
                </div>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))
      }
      <DepartmentModal
        show={modalShow}
        selectedItem={selectedItem}
        filteredList={filteredList}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  jobsFilteredData: state.job.jobsFilteredData,
  filteredList: state.filter.filteredList,
});
export default connect(mapStateToProps, null)(JobList);
