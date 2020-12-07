import { useEffect, useState } from 'react';
import styles from './../../styles/Home.module.css';
import Card from 'react-bootstrap/Card';
import { Accordion, Button, Badge } from 'react-bootstrap';
import DepartmentModal from './DepartmentModal';

export default function JobList() {
  const [jobs, changeJobs] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);

  useEffect(() => {
    fetch('jobs.json')
    .then(res => res.json())
    .then((jobs) => {
      changeJobs(jobs);
      console.log(jobs)
    });
  }, [])

  const avatarName = (name) => {
    return name.split(" ").slice(0, 2).map(str => str[0]).join("");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalShow(true);
  }

  return (
    <div className={styles.jobList}>
      {
        jobs.map((job, pIndex) => (
          <Accordion key={pIndex}>
            <Card>
              <Card.Header style={{backgroundColor: '#ffffff', border: '0px'}}>
                <Accordion.Toggle as={Button} variant="link" eventKey={pIndex+1} style={{width: '100%'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <h3 className="mb-0">
                      <Badge variant="secondary">{avatarName(job.name)}</Badge>
                    </h3>
                    <p style={{marginBottom: '0px', marginLeft: '6px', color: '#8c8b8b'}}>{job.job_title}</p>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={pIndex+1}>
                <div>
                  {
                    job.items.map((item, index) => (
                      <Accordion>
                        <Card style={{border: '0px'}}>
                          <Card.Header style={{backgroundColor: '#ffffff', border: '0px'}}>
                            <Accordion.Toggle as={Button} variant="link" eventKey={pIndex + index + 1} style={{width: '100%'}}>
                              <Card.Body key={index + 'item'} style={Object.assign({}, ((index + 1) !== job.items.length) ? {borderBottom: '1px solid #ccc', paddingBottom: '0px'} : {}, {textAlign: 'left'})}>
                                <h6 style={{color: '#000'}}>{item.job_title}</h6>
                                <p style={{fontSize: '14px', color: '#7d7c7c'}}>{item.job_type} | ${item.salary_range[0]} - {item.salary_range[1]} an hour | {item.city}</p>
                              </Card.Body>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={pIndex + index + 1}>
                            <Card.Body>
                              <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
                                <div style={{width: '80%'}}>
                                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <b>Department:</b>
                                    <div className="mb-2" style={{width: '500px'}}>
                                      {
                                        item.department.map((dept, index) => <span>{dept}{index+1 !== item.department.length && ', '}</span>)
                                      }
                                    </div>
                                  </div>
                                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <b>Hours / shifts:</b>
                                    <div style={{width: '500px'}} className="mb-2">{item.work_schedule}</div>
                                  </div>
                                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <b>Summary:</b>
                                    <div style={{width: '500px'}}>{item.description}</div>
                                  </div>
                                </div>
                                <div style={{width: '20%'}}>
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
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
