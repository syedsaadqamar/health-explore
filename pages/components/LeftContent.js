import { useEffect, useState } from 'react';
import styles from './../../styles/Home.module.css';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';

const mappingFilter = {
  'job_type': 'Job Type',
  'work_schedule': 'Work Schedule',
  'experience': 'Experience',
  'department': 'Department'
}
const LeftContent = ({ filteredList }) => {
  const [filterData, changeFilterData] = useState([]);

  useEffect(() => {
    changeFilterData(filteredList);
  }, [filteredList]);
 
  return (
    <div className={styles.leftContent}>
      {
        Object.keys(filterData).length > 0 && Object.keys(filterData).map((key, index) => (
          <Card style={{ width: '18rem', marginBottom: '20px' }} key={index}>
            <Card.Body>
              <Card.Title>{mappingFilter[key]}</Card.Title>
              {
                filterData[key].map((filterVal, index) => (
                  <Card.Text style={{ margin: '0px', marginBottom: '10px' }} key={index}>
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

const mapStateToProps = state => ({
  filteredList: state.filter.filteredList,
});
export default connect(mapStateToProps, null)(LeftContent);
