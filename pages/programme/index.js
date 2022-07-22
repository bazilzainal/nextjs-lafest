import Head from "next/head";
import { siteTitle } from "../../components/layout";
import Layout from "../../components/layout";
import Section from "../../components/section";
import Timeline from "../../components/timeline";
import { getSortedEventsData } from "../../lib/events";
import Link from "next/link";

export default function Page({ allEventsData }) {
    return (
        <Layout>
            <Head>
                <title>Programme | {siteTitle}</title>
            </Head>

            {allEventsData.map((event) => (
            
                <Section key={event.id} size="Sm">
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                    <p>{event.date}</p>
                    <Link href={`/events/${event.id}`}>
                        <a>{event.title}</a>
                    </Link>
                </Section>
            ))}

            <Section size="Md">
                <Timeline></Timeline>
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
