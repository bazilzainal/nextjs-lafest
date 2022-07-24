import { Container } from "react-bootstrap";
import { siteTitle } from "./layout";
import styles from "./footer.module.scss";

export default function Footer() {
    var currentTime = new Date();
    var year = currentTime.getFullYear();

    return (
        <div className={styles.footer}>
            <Container>
                <p>Copyright © {year} {siteTitle}</p>
            </Container>
        </div>
    );
}