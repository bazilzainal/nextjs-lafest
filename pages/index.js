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
                    <h1>Welcome to the First Langkawi Writers' Festival</h1>
                    <p>We're super stoked to have you here.</p>
                </Section>
                <Section>
                    <h1>LOTS OF WRITING TO BE HAD</h1>
                    <p>Writing awesome stuff – this way </p>
                </Section>
            </Layout>
        </>
    );
}
