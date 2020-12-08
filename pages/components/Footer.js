import styles from './../../styles/Home.module.css';
import { footerContent } from '../constants/constant';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {
        Object.keys(footerContent).map((key, index) => (
          <div key={index} style={index === 0 ? {width: '40%'} : {width: '30%'}}>
            <h4>{key}</h4>
            {
              footerContent[key].map((val, cIndex) => (
                <p className={styles.footerContent} key={cIndex}>
                  {val}
                </p>
              ))
            }
          </div>
        ))
      }
    </footer>
  );
}
