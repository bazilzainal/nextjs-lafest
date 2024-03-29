import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Hero from "../components/hero";
import Section from "../components/section";
import Timeline from "../components/timeline";
import { Container, Row, Col } from "react-bootstrap";
import { getAllEventsData } from "../lib/datocms";
import Button from "react-bootstrap/Button";

// Media imports
import MAG from "../public/images/logo/MAG.png";
import balaiseni from "../public/images/logo/balaiseninegara.jpg";
import LADA from "../public/images/logo/LADA.svg";
import motac from "../public/images/logo/motac.png";

export default function Home({ allEventsData }) {
    const eventList = allEventsData.allEvents;

    return <>
        <Hero />
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Section size="Sm">
                <div className={utilStyles.intro}>
                    <h1 className={utilStyles.introtext}>next stop, for those who read</h1>
                </div>
            </Section>
            <Section size="Sm">
                <h3 className={utilStyles.subheader}>Readers, here’s your ticket </h3>
                <p>
                    To love reading is to love anticipating the next stop of your journey into a new world. Travel
                    with us to the inaugural Langkawi Writers’ Festival. Between 1 to 4 September 2022, the island
                    will be lit by the curious minds of local and international writers, poets, scientists, and
                    public intellectuals. Share the universal human experience of storytelling with like-minded book
                    lovers.
                </p>
            </Section>
            <a id="programme"></a>
            <Section size="Xs">
                {/* <a href="/register" className={utilStyles.buttonFold}>
                    <span className={utilStyles.textContainer}>
                        <span className={utilStyles.text}>Register</span>
                    </span>
                </a> */}

                {/* <a href="/register" className={utilStyles.button}>
                    Register
                </a> */}

                <Button href="/register">Register</Button>
            </Section>
            <Section size="Md">
                <Timeline allEventsData={eventList}></Timeline>
            </Section>
            <Section size="Sm" className={utilStyles.organizers} middle>
                <Container className={utilStyles.sponsors}>
                    <Row className={utilStyles.row}>
                        <p>Event proudly organized by</p>
                    </Row>
                    <Row className={utilStyles.row}>
                        <Col sm={12} className={utilStyles.sponsorPhotos}>
                            <Image
                                src={MAG}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }}></Image>
                        </Col>
                    </Row>
                </Container>
                <Container className={utilStyles.sponsors}>
                    <Row className={utilStyles.row}>
                        <p>Supported by</p>
                    </Row>
                    <Row className={utilStyles.row}>
                        <Col sm={4} className={utilStyles.motac}>
                            <Image
                                src={motac}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }}></Image>
                        </Col>
                        <Col sm={4} className={utilStyles.lada}>
                            <Image
                                src={LADA}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }}></Image>
                        </Col>
                        <Col sm={4} className={utilStyles.balaiseni}>
                            <Image
                                src={balaiseni}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }}></Image>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </Layout>
    </>;
}

export async function getStaticProps() {
    const allEventsData = await getAllEventsData();
    return {
        props: {
            allEventsData,
        },
    };
}
