import Layout from "../../components/layout";
import { getAllEventIds, getEventData } from "../../lib/events";
import Section from "../../components/section";
import Image from "next/image";
import styles from "./utils.module.css";

export default function Event({ eventData }) {
    return (
        <Layout>
            <Section size="Md">
                    <Image src={eventData.hero} width="100%" height="100%" objectFit="contain"></Image>
            </Section>
            <Section>
                {eventData.title}
                <br />
                {eventData.date}
                <br />
                <div dangerouslySetInnerHTML={{ __html: eventData.contentHtml }}></div>
            </Section>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllEventIds();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const eventData = await getEventData(params.id);

    return {
        props: {
            eventData,
        },
    };
}
