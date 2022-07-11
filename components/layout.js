import Head from "next/head";
import { Container } from "react-bootstrap";
import Footer from "./footer";
import ogshare from "../public/images/og-share.png";

export const siteTitle = "Langkawi Writers' Festival";

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Literature" />
                <meta
                    property="og:image"
                    content="https://langkawiwritersfestival.com/images/ogshare.png"
                />
                {/* <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                /> */}
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {home && <main>{children}</main>}
            {!home && (
                <Container>
                    {/* Spacer element for sticky header */}
                    <div style={{ height: `15vh` }}></div>
                    {children}
                </Container>
            )}
            <Footer />
        </div>
    );
}
