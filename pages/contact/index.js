import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Accordion from "react-bootstrap/Accordion";
import Section from "../../components/section";
import { siteTitle } from "../../components/layout";

export default function Page() {
    return (
        <Layout>
            <Head>
                <title>Contact | {siteTitle}</title>
            </Head>
            <Section>
                <h1>Meet Our Team</h1>
            </Section>
        </Layout>
    );
}
