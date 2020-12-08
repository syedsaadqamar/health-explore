import { useEffect, useState } from 'react';
import styles from './../../styles/Home.module.css';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { mappingFilter } from '../constants/constant';

const LeftContent = ({ filteredList }) => {
  const [filterData , changeFilterData] = useState({});
  const [dataExtand , changeDataExtand] = useState({
    itemsToShow: 10,
    expanded: false
  });

  useEffect(() => {
    changeFilterData(filteredList);
  }, [filteredList]);

  const showMore = (lngth) => {
    dataExtand.itemsToShow === 10 ? (
      changeDataExtand({itemsToShow: lngth, expanded: true })
    ) : (
      changeDataExtand({itemsToShow: 10, expanded: true })
    )
  }
 
  return (
    <div className={styles.leftContent}>
      {
        Object.keys(filterData).length > 0 && Object.keys(filterData).map((key, index) => (
          <Card className={styles.leftCard} key={index}>
            <Card.Body>
              <Card.Title>{mappingFilter[key]}</Card.Title>
              {
                filterData[key].slice(0, dataExtand.itemsToShow).map((filterVal, index) => (
                  <div className="m-0 mb-2" key={index}>
                    <div className="d-flex align-items-center">
                      <span>
                        <span>{filterVal.key}</span>
                        <span className={styles.jobCount}>
                          {filterVal.doc_count}
                        </span>
                      </span>
                    </div>
                  </div>
                ))
              }
              {
                filterData[key].length > 10 &&
                <a className={styles.showMore} onClick={() => showMore(filterData[key].length)}>
                  {dataExtand.expanded ? (
                    <span>Show less</span>
                  ) : (
                    <span>Show more</span>
                  )}
                </a>
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
