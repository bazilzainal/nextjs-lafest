import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Hero from "../components/hero";
import Section from "../components/section";
import profilePicture from "../public/images/garden.jpg";
import { getSortedEventsData } from "../lib/events";
import Button from "react-bootstrap/Button";
import Timeline from "../components/timeline";

export default function Home({ allEventsData }) {
    return (
        <>
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
                <Section size="Sm">
                    <a href="/register" className={utilStyles.buttonFold}>
                        <span className={utilStyles.textContainer}>
                            <span className={utilStyles.text}>Register</span>
                        </span>
                    </a>

                    {/* <a href="/register" className={utilStyles.button}>
                        Register
                    </a> */}
                    <a id="programme"></a>
                </Section>
                <Section size="Md">
                    <Timeline allEventsData={allEventsData}></Timeline>
                </Section>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const allEventsData = getSortedEventsData();
    return {
        props: {
            allEventsData,
        },
    };
}
