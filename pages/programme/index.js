import Head from "next/head";
import Layout from "../../components/layout";
import Section from "../../components/section";
import { siteTitle } from "../../components/layout";
import { getAllEventsData } from "../../lib/datocms";
import Timeline from "../../components/timeline";

export default function Page({ eventData }) {
    const eventList = eventData.allEvents;

    return (
        <Layout>
            <Head>
                <title>Programme | {siteTitle}</title>
            </Head>

            <Section size="Md">
                <Timeline allEventsData={eventList}></Timeline>
            </Section>
        </Layout>
    );
}

export async function getStaticProps() {
    const eventData = await getAllEventsData();

    return {
        props: { eventData },
    };
}
