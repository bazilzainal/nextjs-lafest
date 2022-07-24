import styles from "./section.module.scss";
import { Container } from "react-bootstrap";
import utilStyles from "../styles/utils.module.css";


export default function Section({ children, size, middle }) {
    let sizeClass = styles.section;

    switch (size) {
        case "Lg":
            sizeClass = styles.sectionLg;
            break;
        case "Sm":
            sizeClass = styles.sectionSm;
            break;
        case "Md":
            sizeClass = styles.sectionMd;
            break;
        case "Xl":
            sizeClass = styles.sectionXl;
            break;
        case "Xs":
            sizeClass = styles.sectionXs;
            break;
        default:
            sizeClass = styles.sectionLg;
            break;
    }

    return (
        <div className={`${sizeClass} ${middle && styles.middle}`}>
            <Container fluid="md" className={utilStyles.flexdiv}>
                <>{children}</>
            </Container>
        </div>
    );
}
