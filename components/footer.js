import { Container } from "react-bootstrap";
import { siteTitle } from "./layout";

export default function Footer() {
    var currentTime = new Date();
    var year = currentTime.getFullYear();

    return (
        <div className="footer">
            <Container>
                <p>Copyright © {year} {siteTitle}</p>
            </Container>
            <style jsx>{`
                .footer {
                    background-color: #424242;
                    padding: 20px;
                    // position: fixed;
                    bottom: 0;
                    width: 100%;
                    left: 0;
                    text-align: center;
                }
                
                p {
                    color: #fff;
                }
            `}</style>
        </div>
    );
}