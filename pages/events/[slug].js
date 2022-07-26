import Layout from "../../components/layout";
import Section from "../../components/section";
import styles from "./events.module.css";
import { getEventData, request } from "../../lib/datocms";
import { StructuredText, Image } from "react-datocms";
import { Container } from "react-bootstrap";

export default function Event({ eventData }) {
    return (
        <Layout>
            <Section size="Md">
                <Container className={styles.eventPage}>
                    <Image data={eventData.coverImage.responsiveImage} />
                    <figcaption>{eventData.coverImage.responsiveImage.title}</figcaption>
                    <h1>{eventData.title}</h1>
                    <StructuredText
                        data={eventData.content}
                        renderBlock={({ record }) => {
                            switch (record.__typename) {
                                case "ImageRecord":
                                    return <Image data={record.image.responsiveImage} />;
                                default:
                                    return null;
                            }
                        }}></StructuredText>
                </Container>
            </Section>
        </Layout>
    );
}

const ALL_SLUGS_QUERY = `
    query MyQuery {
        allEvents {
        slug
        }
    }
`;

export async function getStaticPaths() {
    const slugQuery = await request({
        query: ALL_SLUGS_QUERY,
    });

    let paths = [];
    slugQuery.allEvents.map((slug) => paths.push(`/events/${slug.slug}`));

    return {
        paths,
        fallback: false,
    };
}

const EVENT_QUERY = `
query MyQuery($slug: String) {
    event(filter: {slug: {eq: $slug}}) {
      slug
      title
      excerpt
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, h: 300 }) {
            alt
            base64
            bgColor
            title
            src
            srcSet
            aspectRatio
            height
            sizes
            webpSrcSet
            width
            title
        } 
      }
      content {
        value
        blocks {
            __typename
            ... on ImageRecord {
                id
                image { 
                    responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 200 }) {
                        alt
                        base64
                        bgColor
                        title
                        src
                        srcSet
                        aspectRatio
                        height
                        sizes
                        webpSrcSet
                        width
                        title
                    } 
                }
            }
        }
    }
    }
  }
`;

export async function getStaticProps({ params }) {
    const event = await request({
        query: EVENT_QUERY,
        variables: {
            slug: params.slug,
        },
    });

    console.log("Here is the response");
    console.log(event.event);
    return {
        props: { eventData: event.event },
    };
}
