import styles from './../../styles/Home.module.css';
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux';

const JobList = ({ jobsList }) => {
  console.log({ jobsList });
  return (
    <div className={styles.jobList}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapStateToProps = state => ({
  jobsList: state.job.jobsList,
});
export default connect(mapStateToProps, null)(JobList);
