import { Navbar, Nav, Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge'
import styles from './../../styles/Home.module.css';
import Image from 'react-bootstrap/Image';

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className={styles.navBar}>
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home" className={styles.mainHeading}>HEALTH EXPLORE</Navbar.Brand>
        </>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#profile" className={styles.navLink}>PROFILE</Nav.Link>
            <Nav.Link href="#jobs" className={styles.navLink}>JOBS</Nav.Link>
            <Nav.Link href="#professional-network" className={styles.navLink}>PROFESSIONAL NETWORK</Nav.Link>
            <Nav.Link href="#lounge" className={styles.navLink}>LOUNGE</Nav.Link>
            <Nav.Link href="#salary" className={styles.navLink}>SALARY</Nav.Link>
          </Nav>
          <>
            <Button variant="outline-primary" className="mr-sm-4">CREATE JOB</Button>
            <div className={styles.profileImage}>
              <Badge pill variant="danger" className={styles.profileCount}>
                3
              </Badge>
              <Image src="/profile.png" width="40" roundedCircle className="mr-sm-4"></Image>
            </div>
            <Navbar.Text>LOGOUT</Navbar.Text>
          </>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
