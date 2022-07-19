import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Hero from "../components/hero";
import Section from "../components/section";
import profilePicture from "../public/images/garden.jpg";
import Button from "react-bootstrap/Button";

export default function Home() {
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
                    <Image width={250} height={250} src={profilePicture} className={utilStyles.profilePicture} />
                </Section>
            </Layout>
        </>
    );
}
