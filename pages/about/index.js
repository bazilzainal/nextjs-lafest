import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Section from "../../components/section";
import { siteTitle } from "../../components/layout";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import utilStyles from "../../styles/utils.module.css";
import profilePicture from "../../public/images/garden.jpg";

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>About | {siteTitle}</title>
            </Head>

            <Section size="Md">
                <Container className={utilStyles.flexdiv}>
                    <Row className={utilStyles.row}>
                        <Col md={3} className={utilStyles.flexdiv}>
                            <h1>About</h1>
                        </Col>
                        <Col md={7}>
                            <p>
                                Langkawi is proud to announce its very first Writers’ Festival. Between 1 to 4 September
                                2022, the festival will welcome inquisitive, stirring, and boundary-pushing
                                conversations helmed by the brightest of contemporary thinkers and writers. We welcome
                                you to join us—to make connections in person, share your thoughts, and bring Langkawi’s
                                boldest literary and art festival to life. <br /> Our four-day lineup{" "}
                                {/* link to programme */}
                                is brimming with lectures, talks, and workshops which focus on themes that resonate with
                                the global citizen.
                            </p>
                        </Col>
                    </Row>
                    <Row className={utilStyles.row}>
                        <Col sm={4}>
                            <p>
                                Langkawi’s slow island life also offers an intimate local backdrop for knowledge seekers
                                to dwell in the heart of conversations about the history of the Malay language, its
                                place in the broader world of literature, and the broader state of the culture and the
                                arts in Malaysia. Give yourself the time and space to explore the world. Langkawi
                                Writers’ Festival: next stop, for those who read.
                            </p>
                        </Col>
                        <Col sm={6} className={utilStyles.flexdiv}>
                            <h4>
                                <i>We're writing our future</i>
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section size="Xs"></Section>
        </Layout>
    );
}
