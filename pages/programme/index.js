import Head from "next/head";
import Layout from "../../components/layout";
import Section from "../../components/section";
import { siteTitle } from "../../components/layout";
import { getEventData } from "../../lib/datocms";
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
{/* 
                {eventList.map((event) => (
                    <div key={event.slug}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <Image data={event.coverImage.responsiveImage}></Image>
                        <StructuredText
                            data={event.content}
                            renderBlock={({ record }) => {
                                switch (record.__typename) {
                                    case "ImageRecord":
                                        return <Image data={record.image.responsiveImage} />;
                                    default:
                                        return null;
                                }
                            }}></StructuredText>
                    </div>
                ))} */}
            </Section>
        </Layout>
    );
}



export async function getStaticProps() {
    const eventData = await getEventData();

    return {
        props: { eventData },
    };
}
