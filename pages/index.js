import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Hero from "../components/hero";
import Section from "../components/section";

export default function Home() {
    return (
        <>
            <Hero />
            <Layout home>
                <Head>
                    <title>{siteTitle}</title>
                </Head>
                <Section>
                    <div className={utilStyles.intro}>
                        <h1 className={utilStyles.introtext}>Welcome to the Inaugural Langkawi Writers' Festival</h1>
                    </div>
                </Section>
                <Section>
                    <h1>we're still writing things up</h1>
                    <h2>but good things are coming your way</h2>
                </Section>
            </Layout>
        </>
    );
}
