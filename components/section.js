import styles from "./section.module.css";
import { Container } from "react-bootstrap";
import utilStyles from "../styles/utils.module.css";


export default function Section({ children, size }) {
    let className = styles.section;

    switch (size) {
        case "Lg":
            className = styles.sectionLg;
            break;
        case "Sm":
            className = styles.sectionSm;
            break;
        case "Md":
            className = styles.sectionMd;
            break;
        case "Xl":
            className = styles.sectionXl;
            break;
        case "Xs":
            className = styles.sectionXs;
            break;
        default:
            className = styles.sectionLg;
            break;
    }

    return (
        <div className={className}>
            <Container fluid="md" className={utilStyles.flexdiv}>
                <>{children}</>
            </Container>
        </div>
    );
}
