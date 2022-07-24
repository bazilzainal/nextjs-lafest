import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Section from "../../components/section";
import Timeline from "../../components/timeline";
import Date from '../../components/date';
import { siteTitle } from "../../components/layout";
import { getSortedEventsData } from "../../lib/events";

export default function Page({ allEventsData }) {
    return (
        <Layout>
            <Head>
                <title>Programme | {siteTitle}</title>
            </Head>

            <Section size="Md">
                <Timeline allEventsData={ allEventsData }></Timeline>
            </Section>
        </Layout>
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
