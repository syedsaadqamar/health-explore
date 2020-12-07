import { useEffect, useState } from 'react';
import styles from './../../styles/Home.module.css';
import Card from 'react-bootstrap/Card'
// import filters from './../api/filters';

const mappingFilter = {
  'job_type': 'Job Type',
  'work_schedule': 'Work Schedule',
  'experience': 'Experience',
  'department': 'Department'
}
export default function LeftContent() {
  const [filterData, changeFilterData] = useState([]);

  useEffect(() => {
    fetch('filters.json')
    .then(res => res.json())
    .then((filters) => {
      // const tempFilter = [];
      // for(const key in filters) {
      //   tempFilter.push(filters[key]);
      // }
      changeFilterData(filters);
      console.log(filters)
    });
  }, [])
 
  return (
    <div className={styles.leftContent}>
      {
        Object.keys(filterData).map((key, index) => (
          <Card style={{ width: '18rem', marginBottom: '20px' }} key={index}>
            <Card.Body>
              <Card.Title>{mappingFilter[key]}</Card.Title>
              {
                filterData[key].map(filterVal => (
                  <Card.Text style={{ margin: '0px', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span>{filterVal.key} <span style={{ marginTop: '2px' ,marginLeft: '8px', fontSize: '12px', color: '#ccc' }}>{filterVal.doc_count}</span></span>
                    </div>
                  </Card.Text>
                ))
              }
            </Card.Body>
          </Card>
        ))
      }
    </div>
  );
}
