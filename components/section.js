import styles from "./section.module.css";
import {Container} from 'react-bootstrap';

export default function Section({children}) {
    return (
        <div className={styles.section}>
            <Container>
                <>{children}</>
            </Container>
        </div>
    );
}
