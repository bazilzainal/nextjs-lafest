import Head from "next/head";
import { Container } from "react-bootstrap";
import Footer from "./footer";

export const siteTitle = "Langkawi Writers' Festival";

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                {/* <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Langkawi Writers' Festival</title>
                <meta
                    name="description"
                    content="Langkawi is proud to announce its very first Writers’ Festival. Between 1 to 4 September 2022, the festival will welcome inquisitive, stirring, and boundary-pushing conversations helmed by the brightest of contemporary thinkers and writers. "
                />

                <meta property="og:url" content="https://langkawiwritersfestival.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Langkawi Writers' Festival" />
                <meta
                    property="og:description"
                    content="Langkawi is proud to announce its very first Writers’ Festival. Between 1 to 4 September 2022, the festival will welcome inquisitive, stirring, and boundary-pushing conversations helmed by the brightest of contemporary thinkers and writers. "
                />
                <meta property="og:image" content="https://langkawiwritersfestival.com/images/ogshare.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="langkawiwritersfestival.com" />
                <meta property="twitter:url" content="https://langkawiwritersfestival.com/" />
                <meta name="twitter:title" content="Langkawi Writers' Festival" />
                <meta
                    name="twitter:description"
                    content="Langkawi is proud to announce its very first Writers’ Festival. Between 1 to 4 September 2022, the festival will welcome inquisitive, stirring, and boundary-pushing conversations helmed by the brightest of contemporary thinkers and writers. "
                />
                <meta name="twitter:image" content="https://langkawiwritersfestival.com/images/ogshare.png" />
            </Head>

            {home && <main>{children}</main>}
            {!home && (
                <main>
                    {/* Spacer element for sticky header */}
                    <div style={{ height: `15vh` }}></div>
                    {children}
                </main>
            )}
            <Footer />
        </div>
    );
}
