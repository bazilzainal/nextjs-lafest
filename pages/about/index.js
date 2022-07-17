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
                    <Row>
                        <Col md={3} className={utilStyles.flexdiv}>
                            <h1>Story</h1>
                        </Col>
                        <Col md={7}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam doloribus officia
                                quibusdam est exercitationem cupiditate cumque at quo dignissimos deleniti distinctio
                                libero non officiis nulla animi natus maxime aliquid, ipsa suscipit voluptatibus
                                dolores, nisi esse. Aperiam officiis dolor repudiandae, minima perspiciatis repellat sit
                                sequi, est harum rem quo vitae.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam doloribus officia
                                quibusdam est exercitationem cupiditate cumque at quo dignissimos deleniti distinctio
                                libero non officiis nulla animi natus maxime aliquid, ipsa suscipit voluptatibus
                                dolores, nisi esse. Aperiam officiis dolor repudiandae, minima perspiciatis repellat sit
                                sequi, est harum rem quo vitae.
                            </p>
                        </Col>
                        <Col sm={6} className={utilStyles.flexdiv}>
                            <h2><i>"We're writing our future"</i></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="true">
                            <Image 
                            src={profilePicture}
                            width={150}
                            height={150}
                            className={utilStyles.profilePicture}
                            />
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section size="Sm"></Section>
        </Layout>
    );
}
