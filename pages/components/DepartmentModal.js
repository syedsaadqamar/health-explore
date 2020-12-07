import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function DepartmentModal(props) {
  const [departments, changeDepartments] = useState([]);
  const { selectedItem, onHide } = props;
  const modalProps = {...props};
  delete modalProps.selectedItem;

  useEffect(() => {
    fetch('filters.json')
    .then(res => res.json())
    .then((filters) => {    
      changeDepartments(filters['department'].filter(dept => selectedItem.department.includes(dept.key)));
    });
  }, [])

  return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="department-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="department-modal">
          Department
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            {
              departments.map((dept, index) => (
                <Col md={3} key={index}>
                  <div style={{marginBottom: '4px'}}>
                    {dept.key} <span style={{color: '#ccc'}}>{dept.doc_count}</span>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
