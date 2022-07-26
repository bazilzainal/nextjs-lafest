import { GraphQLClient } from "graphql-request";

export function request({ query, variables, includeDrafts, excludeInvalid }) {
    const headers = {
        authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    };
    if (includeDrafts) {
        headers["X-Include-Drafts"] = "true";
    }
    if (excludeInvalid) {
        headers["X-Exclude-Invalid"] = "true";
    }
    const client = new GraphQLClient("https://graphql.datocms.com", { headers });
    return client.request(query, variables);
}

export async function getEventData() {
    const eventData = await request({
        query: EVENTS_QUERY,
    });

    return eventData;
}

const EVENTS_QUERY = `
query MyQuery {
    allEvents(orderBy: startDate_ASC)  {
        slug
        coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, h:300 }) {
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
            }
        }
        title
        excerpt
        startDate
        endDate
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
                        } 
                    }
                }
            }
        }
    }
  }
`;
